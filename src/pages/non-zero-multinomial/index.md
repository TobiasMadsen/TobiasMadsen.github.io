---
title: Non-zero counts in multinomial distribution
subtitle: 
author: "Tobias Madsen"
tags: [probability theory, ecology, combinatorics]
date: "2020/24/10"
---

What is the distribution of the number of non-zero counts in a multinomial distribution? I recently answered this [question](https://math.stackexchange.com/questions/2210300/distribution-of-number-of-non-zero-counts-of-a-multinomial-distributed-set/) on mathematics stackexchange.
This question comes up in the field of ecology: When a researcher wants to know the number of different species - the diversity - in a given habitat, she can make a field trip and count the number of individuals she can find from each species.
There is however the problem that with large enough habitats, it is imposible to account for every single individual.
Thus, there may be species present in the habitat that has not been counted.
A reasonable model for the number of individuals we find from each species is a multinomial model, and the total number of different species discovered is exactly the number of non-zero counts in the multinomial distribution.
The distribution (and particular the variance) on this number gives us an idea of how certain we are on the diversity in the habitat.
A great amount of the theory on this subject has been developed by [Anne Chao](https://en.wikipedia.org/wiki/Anne_Chao) with the application in ecology in mind, my own interest in the problem stems from the similar problem of estimating the diversity of [T-cell receptor repertoires](https://en.wikipedia.org/wiki/Immune_repertoire).

To state the problem mathematically, let $(n_1,n_2,\ldots, n_M) \sim \operatorname{multinomial}(p_1,p_2,\ldots, p_M, N)$ we are interested in the distribution of the sum $I = \sum_{i=1}^M \mathbb{I}(n_i > 0)$. I doubt that a closed form solution exists for the general problem, but you can find the exact solution using dynamic programming. We can also compute the mean and variance of $I$ and then use a normal approximation. And finally for the special case where $p_1 = p_2 = \ldots p_M = 1/M$ you can find a closed form solution using Stirling numbers of the second kind. I will go through each in turn below.

**Exact solution using dynamic programming**

Define $S_k = \sum_{i=1}^k n_i$, $I_k = \sum_{i=1}^k \mathbb{I}(n_i > 0)$. Using dynamic programming we will iteratively compute the probability that the $k$ first variables sum to $n$ and that $m$ of the first $k$ are non-zero,

$$
d(k, n, m) = P(S_k = n, I_k = m)
$$

Initialize the dynamic programming table with,

$$
d(0, n, m) = \begin{cases}
  1 & n=0, m=0 \\
  0 & \text{otherwise}
  \end{cases}
$$

Then recurse over $k=1,\ldots,M$,

$$
d(k, n, m) = \operatorname{binomial}(0; N-n, \tilde{p}_k)d(k-1, n, m) + \sum_{r=1}^{n}\operatorname{binomial}(r; N-n+r,\tilde{p}_k)d(k-1, n-r, m-1), \quad m \leq k
$$

where $\tilde{p}_{k} = p_{k} / \sum_{i=k+1}^M p_i$. The first term accounts for the case where the k'th variable is zero and therefore does not contribute new non-zero variables, and the second term (the sum) accounts for all cases where the k'th variable is non-zero. Below is a naive R implementation. The loops can be rearranged to have the final loop being over $r$ rather than $m$ to avoid computing the same binomial densities multiple times, still I don't think this can be done better than $\mathcal{O}(M^2N^2)$.

    p <- c(0.1,0.1,0.2,0.2,0.4)
    N <- 6
    M <- 5
    
    p_tilde <- p / rev(cumsum(rev(p)))
    d <- array(0, dim = c(M+1,N+1,M+1))
    d[1,1,1] = 1
    for (k in 1:M) {
      for (n in 0:N) {
        for (m in 0:k) {
          d[k+1, n+1, m+1] <- dbinom(0, N-n, prob = p_tilde[k]) * d[k, n+1, m+1]
          if (m > 0 && n > 0) {
            r <- 1:n
            d[k+1, n+1, m+1] <- d[k+1, n+1, m+1] + 
              sum(dbinom(r, r+N-n, prob = p_tilde[k]) * d[k, n-r+1, m])
          }
        }
      }
    }

Verify solution by simulation

    > table(colSums(rmultinom(1e6, size = N, prob = p) > 0 )) / 1e6
    
           1        2        3        4        5 
    0.004245 0.114157 0.449484 0.374784 0.057330 
    > d[M+1,N+1,]
    [1] 0.000000 0.004226 0.114734 0.449280 0.374160 0.057600

**Approximation solution**

To use a normal approximation we must compute the mean and variance. First the mean can be computed as,

$$
\mathbb{E}[m]=
\mathbb{E}\left[\sum_{i=1}^M\mathbb{I}(n_i>0)\right] =
\sum_{i=1}^M\mathbb{E}[\mathbb{I}(n_i>0)] =
\sum_{i=1}^M 1-(1-p_i)^N.
$$

Next the variance,
$$
\begin{aligned}
\mathbb{V}[m] 
    &= \mathbb{V}\left[\sum_{i=1}^M\mathbb{I}(n_i>0)\right] \\
    &= \sum_{i=1}^M\mathbb{E}[\mathbb{I}(n_i>0)] \\
    &= \sum_{i=1}^M\mathbb{V}[\mathbb{I}(n_i>0)] + 2 \sum_{1\leq i < j \leq M} \operatorname{Cov}(\mathbb{I}(n_i>0), \mathbb{I}(n_j>0)) \\
    &= \sum_{i=1}^M (1-(1-p_i)^N)(1-p_i)^N + 2 \sum_{1\leq i < j \leq M} \operatorname{Cov}(1-\mathbb{I}(n_i>0), 1-\mathbb{I}(n_j>0)) \\
    &= \sum_{i=1}^M (1-(1-p_i)^N)(1-p_i)^N + 2 \sum_{1\leq i < j \leq M} \left[(1-p_i-p_j)^N - (1-p_i)^N(1-p_j)^N\right]
\end{aligned}
$$

This is an $\mathcal{O}(N^2)$ algorithm. If $M$ is very large you may omit the covariance terms which you should generally expect to be small and you can compute the approximation in $\mathcal{O}(N)$.

    computed_variance <- sum((1-p)^N*(1-(1-p)^N))
    for (i in 1:(M-1)) {
      for (j in (i+1):M) {
        computed_variance <- computed_variance + 2*((1-p[i]-p[j])^N-(1-p[i])^N*(1-p[j])^N)
      }
    }

    > computed_variance
    [1] 0.602115
    > var(colSums(rmultinom(1e6, size = N, prob = p) > 0 ))
    [1] 0.602461

**Uniform case**

Finally, in the uniform case $p_i=p\,\forall i$, we must count how many ways we can distribute $N$ numbered objects in $M$ number using exactly $m$ of the bins. This can be done in a two step procedure, first choose $m$ of the $M$ bins, this can be done in $M \choose m$ ways. Then distribute the $N$ objects into each of the $m$ bins with at least one object in each bin, this can be done in $N!S(N,m)$ where $S(N,m)$ is the Stirling number of the second kind. We end up with the following formula

$$
p(m) = {M \choose m}  S(N,m) / M^N
$$

Example, $N=4$, $M=5$, $m=3$ ($S(4,3) = 6$):

    > table(colSums(rmultinom(1e6, size = 4, prob = rep(1/5, 5)) > 0)) / 1e6
    
           1        2        3        4 
    0.008013 0.224771 0.575393 0.191823 
    > choose(5, 3) * factorial(3) * 6 / 5^4
    [1] 0.576


