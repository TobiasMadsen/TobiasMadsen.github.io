---
layout: post
title: Significance Evaluation in Factor Graphs
author: "Tobias Madsen"
tags: [rare events, r, significance evaluation]
date: "2017/03/31"
---

Our paper on [Significance Evaluation in Factor Graphs](http://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-017-1614-z) has just been published.
In the paper we investigate how to evaluate the significance of rare events for a wide-class of models defined by factor graphs. Factor graphs are a graphical model formalism capturing both Bayesian Networks and Markov Random Fields and thus covering a very wide range of models. 
Originally we were led to this question by considering relatively simple first and second order Markov chain models for long DNA motifs, exhibiting dependencies between neighboring bases. Particularly we were looking at the nucleosome binding motif. 
While developing our methods a great [paper](https://academic.oup.com/nar/article/44/13/6055/2457621/Bayesian-Markov-models-consistently-outperform) on learning these neighbor correlations between bases in motifs in a regularized fashion was published. This makes me quite confident that our methods are relevant to the field.
Without further ado - enjoy [reading](http://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-017-1614-z).
