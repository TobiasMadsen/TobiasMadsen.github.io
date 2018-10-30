---
layout: post
title: Automatic Differentiation in R
subtitle: Use Stan Math library to do reverse-mode automatic differentiation in R
author: "Tobias Madsen"
tags: [r, logistic regression]
date: "2017/03/31"
image: "./rcode.png"
---

Automatic Differentiation (AD) specifically reverse-mode AD takes a function, 
$$f: \mathbb{R}^n\rightarrow\mathbb{R},$$ 
defined by a computer program and computes the gradient exactly (up to machine precision) and at the same time complexity as the original program. 
Here I will show how one can use the Reverse-Mode Automatic Differentiation Library provided by [Stan Math Library](https://arxiv.org/abs/1509.07164) in R. 

#### Setting Up
The hardest part is making sure that dependencies are resolved during compilation.
The relevant headers are in the `Rcpp`, `RcppEigen` and `StanHeaders` packages, so first these packages must be installed:

```r{1}{numberLines: true}
install.packages(c("Rcpp","RcppEigen","StanHeaders"))
```

The headers must be included during compilation, to this end we set `PKG_CXXFLAGS` system variable.

```r
Sys.setenv("PKG_CXXFLAGS"='-I"YOUR_LIB_PATH/Rcpp/include" -I"YOUR_LIB_PATH/RcppEigen/include" -I"YOUR_LIB_PATH/StanHeaders/include"')
```

Where `YOUR_LIB_PATH` should be replaced with the directory where R packages are installed on your system, which can be found by calling `.libPaths()`.
Note that if you are developing a package it is enough to add the following line to the `DESCRIPTION` file:


```r
LinkingTo: Rcpp (>= 0.12.7), RcppEigen, StanHeaders (>= 2.12.0)
```

#### Reverse-Mode AD

Now we are ready to see AD in action. The following function computes the log density function of a normal distrubted variable $$\log \phi(y; \mu, \sigma)$$, and its derivative with respect to $$y,\mu$$ and $$\sigma$$.


```cpp
#include <Rcpp.h>
#include <stan/math.hpp>

using namespace Rcpp;

// [[Rcpp::export]]
NumericVector normLogLikAD(double y_, double mu_, double sigma_) {
  NumericVector ret(4);
  
  stan::math::var y = y_;
  stan::math::var mu = mu_;
  stan::math::var sigma = sigma_;
  stan::math::var lp = 0;
  
  lp += -0.5* ((y-mu)/sigma) * ((y-mu)/sigma) - log(sigma) - 0.5 * log(2*PI);
  
  // Compute Function Value
  ret[0] = lp.val();
  
  // Compute Gradient
  lp.grad();
  ret[1] = y.adj();
  ret[2] = mu.adj();
  ret[3] = sigma.adj();
  
  // Memory is allocated on a global stack
  stan::math::recover_memory();
  stan::math::ChainableStack::memalloc_.free_all();
  
  return ret;
}
```

The function is now callable from R.


```r
normLogLikAD(2,3,2)
```
```
## [1] -1.737086  0.250000 -0.250000 -0.375000
```

Compare this with the gradient found using numerical differentiation:

```r
library(numDeriv)
grad(func = function(par){dnorm(par[1],par[2],par[3], log=T)}, c(2,3,2))
```
```
## [1]  0.250 -0.250 -0.375
```

The `C++` code is mostly straightforward: Variables are declared as `stan::math::var` all other variables are treated as constants.
To compute the actual value of a variable we call the member-function `val()`,
to compute the gradient of a variable `y` with respect to some variables `x1,x2` we call `y`'s member function `grad()`, 
and the partial derivative $$\frac{\partial y}{\partial x_1}$$ can be obtained by calling `x1`'s member function `adj()`.
Finally it should be noted that `stan::math` allocates memory for variables on a global stack,
that means memory is not automatically freed up when the variables goes out of scope.
The function `recover_memory()` clears this stack and `ChainableStack::memalloc_.free_all()` frees the memory associated with it,
both should be called after finish computation.

#### References

[Stan Math Library](https://arxiv.org/abs/1509.07164)

