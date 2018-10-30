---
layout: post
title: MySQL queries in UCSC databases
author: "Tobias Madsen"
tags: [r, logistic regression]
date: "2015/11/21"
---

I recently wanted to retrieve all SNP's from [dbSNP](https://genome.ucsc.edu/cgi-bin/hgTables?db=hg38&hgta_group=varRep&hgta_track=snp142Common&hgta_table=snp142Common&hgta_doSchema=describe+table+schema) overlapping a set of regions using [UCSC's MySQL interface](https://genome.ucsc.edu/goldenPath/help/mysql.html).
This post shows you how this can be done and how to increase the speed of queries by using UCSC's binning scheme.

First things first - we connect to the database:

```r
library(dplyr)
my_db <- src_mysql("hg19",
                   host = "genome-mysql.cse.ucsc.edu", 
                   user = "genomep", 
                   password = "password")
snpDbMySQL <- tbl(my_db, "snp142")
```

Then we try to retrieve all the SNP's within a short region of 1kb:

```r
# NOT RUN
my_snps <- snpDbMySQL %>%
  filter(chrom == "chr1") %>%
  filter(chromStart >= 4000000) %>%
  filter(chromEnd <= 4001000) %>%
  collect
```

Taking some 40 seconds this is surprisingly slow. (Notice that no data is actually fetched before the `collect` command, `dplyr` is designed to be as lazy as possible with fetching data, see `dplyr`'s database [vignette](https://cran.r-project.org/web/packages/dplyr/vignettes/databases.html).)

Let's investigate a bit and look at how the table is indexed:

    mysql> SHOW INDEX in hg19.snp142;
    +--------+----------+--------------+-------------+
    | Table  | Key_name | Seq_in_index | Column_name |
    +--------+----------+--------------+-------------+
    | snp142 | name     |            1 | name        |
    | snp142 | chrom    |            1 | chrom       |
    | snp142 | chrom    |            2 | bin         |
    +--------+----------+--------------+-------------+
    3 rows in set (0.00 sec)

The output of the `SHOW INDEX` MySQL command reveals that the table is indexed after `name`, `chrom` and something called `bin`.

It turns out that the binning scheme was described in the original [paper](http://genome.cshlp.org/content/12/6/996.full) on the genome browser.

![Source: Kent, et. al. Genome Research 2002](http://genome.cshlp.org/content/12/6/996/F7.large.jpg)

The bin assigned to a feature is the smallest bin the contains the entire feature. So in the figure the feature A will be assigned to bin 1, feature B to bin 4 and feature C to bin 20. SNP's will always fall into the lowest order of bins. 

To calculate the bin(s) we need to consider, we can use a slightly modified version of Jim Kent's C script and use `Rcpp`. 

```cpp
#include <Rcpp.h>
using namespace Rcpp;

int binOffsets[] = {512+64+8+1, 64+8+1, 8+1, 1, 0};

// [[Rcpp::export]]
int binFromRangeStandard(int start, int end) {
  int startBin = start, endBin = end-1, i;
  startBin >>= 17;
  endBin >>= 17;
  for (i=0; i<5; ++i)
  {
    if (startBin == endBin)
      return binOffsets[i] + startBin;
    startBin >>= 3;
    endBin >>= 3;
  }
  return 0;
}
```

```r
library(Rcpp)
sourceCpp("UCSCBinFromRange.cpp")

(binRange <- c(binFromRangeStandard(4000000,4000001), binFromRangeStandard(4001000,4001001)))
```

```
## [1] 615 615
```

We see that both the start and the end coordinate falls into bin `615`.
It is now much faster to query for the SNP's within the region

```r
my_snps <- snpDbMySQL %>%
  filter(chrom == "chr1") %>%
  filter(bin == 615) %>%
  filter(chromStart >= 4000000) %>%
  filter(chromEnd <= 4001000) %>%
  collect
my_snps %>% select(bin, chrom, chromStart, chromEnd)
```



```
## Source: local data frame [54 x 4]
## 
##      bin chrom chromStart chromEnd
##    (dbl) (chr)      (dbl)    (dbl)
## 1    615  chr1    4000015  4000016
## 2    615  chr1    4000040  4000041
## 3    615  chr1    4000080  4000081
## 4    615  chr1    4000090  4000091
## 5    615  chr1    4000091  4000092
## 6    615  chr1    4000105  4000106
## 7    615  chr1    4000110  4000111
## 8    615  chr1    4000111  4000112
## 9    615  chr1    4000112  4000113
## 10   615  chr1    4000136  4000137
## ..   ...   ...        ...      ...
```

And that is it.