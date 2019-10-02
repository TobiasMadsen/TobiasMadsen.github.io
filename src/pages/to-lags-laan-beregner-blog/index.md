---
layout: post
title: To-lags lånberegner
subtitle: Hvornår skal man afbetale på banklånet og hvornår skal man afbetale på realkreditlånet?
author: "Tobias Madsen"
tags: [p-values, bayesian statistics]
date: "2019/10/01"
---

Normalt siges det, at man skal afbetale det dyre banklån før man afdrager på sit realkreditlån.
Men ofte kan det betale sig at dele realkreditlånet op og afdrage på en del af det - et såkaldt to-lags lån.
Jeg har lavet en [beregner](/to-lags-laan-beregner), hvor man kan afprøve forskellige kombinationer af to fastforrentede
realkreditlån med og uden afdrag baseret på TotalKredits bidragssatser[^1].
Det kan være komplekst at afgøre hvor stor en del af lånet, der børe være med afdrag,
men som en tommelfinger-regel vil de fleste kunne spare penge ved at afdrage på den sidste fjerdedel af realkreditlånet.

#### Låneksempel
Hvis man eks. skal låne 2,5 mio kr., kan man låne 80% altså 2 mio kr. i realkreditinstituttet.
Den sidste fjerdedel vil i det tilfælde være 500.000 kr.
Tager man et fastforrentet 1% realkredit lån med afdrag vil bidragssatsen være 1.2%,
mens et tilsvarende afdragsfritlån vil have en bidragssats på 2.0%.
I løbet af første 10 år vil ydelsen på lånet med afdrag være knap 95.000 kr. højere end det afdragsfrilån
(ca 790 kr. om måneden). For dette ekstra beløb vil man have afdraget ca. 150.000 kr.

Havde man i stedet brugt de 95.000 kr. på at betale af på et banklån med en rente på 5%
vil man have sparet ca. 25.000 kr. i renter over de 10 år.
Samlet set har man altså sparet 30.000 kr. (150.000 - 25.000 - 95.000),
ved at have et lån med afdrag på den sidste fjerdedel af lånet.
Så selvom rente og bidrag på realkreditlånet er 2.2% og renten på banklånet er 5%,
kan det bedre svare sig at betale af på realkreditlånet og det vil det faktisk kunne indtil en bankrente på over 9%.

#### Banklånet givet større fleksibilitet
Man skal være klar over, at det ofte er mere fleksibelt at afbetale på et banklån,
da de fleste banker tilbyder at man kan trække noget af afdraget ud igen.
Afdragene på realkreditlånet kan derimod først realiseres ved en lånomlægning.


[^1]: [TotalKredit prisblad](https://www.totalkredit.dk/siteassets/dokumenter/privat/prisblad/prisblad.pdf)