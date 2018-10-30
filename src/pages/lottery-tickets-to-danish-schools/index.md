---
layout: post
title: Lottery tickets to Danish Schools
subtitle: The Danish Ministry of Education has issued an 500M DKK initiative to improve danish students. But the payouts are largely a lottery.
author: "Tobias Madsen"
tags: [statistics, politics]
date: "2018/08/11"
---

Last week the weekly magazine Weekend Avisen brought a story on the first year results of a governmental initiative to incentivise danish schools with poor academic performance[^1].
A schools performance is measured by the percentage of graduating students who get at least a 'D' (4) in both danish and mathematics[^2].
By that measure the 121 schools that performed the worst over the last 3 years were eligible to be part of the initiative.
If a school is able to improve by 5 percentage points the first year it will receive a bonus between 1.3 and 1.5 M DKK. 

The angle in Weekend Avisen was that the government had it sound like they would spend around 160 M DKK on the initiative, but with only a little more than half the schools improving sufficiently, that amount dwindled to 90 M DKK.
Here I will focus on another angle, which is briefly touched upon in the article, namely the rocky statistical basis the bonus relies on.

Most schools have between 20 and 60 students graduating each year.
This means a single student by herself can have an impact of up to 5 percentage point, obviously this leaves a lot of room for random chance.
Furthermore the schools in the initiative are selected for having performed poorly over the last three years. In order to estimate the chance of the schools making their target by random chance we must account for the [regression towards mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean) (RTM) effect[^3].
In short regression towards mean is an effect that dictates that if we have just seen an extreme observation the next observation is more likely to be closer to the average: If you throw a die and it comes up 1, there is a great chance that the next throw will be higher than 1.
RTM is strongest when the outcome is highly stochastic and the first observation was very extreme.
For the schools in the initiative, this means that small schools[^4] and schools with a poor baseline, have the greatest chance of making the target just by chance. 

Without further ado; here is the list of schools and the probability that they will make their target performance by random chance.
The expected number of schools that make the target without implementing any changes is 43, without accounting for RTM we would underestimated this number to 29.


<table class="table" style="margin-left: auto; margin-right: auto;">
 <thead>
  <tr>
   <th style="text-align:left;"> School </th>
   <th style="text-align:right;"> Approximate number of graduating students </th>
   <th style="text-align:left;"> Percentage of "weak students" the last 3 years </th>
   <th style="text-align:left;"> Probability of making the target by chance </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> Lindeskovskolen </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:left;"> 50 % </td>
   <td style="text-align:left;"> 53.9 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Dalmose skole </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:left;"> 54 % </td>
   <td style="text-align:left;"> 52.5 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Firkløverskolen </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:left;"> 33 % </td>
   <td style="text-align:left;"> 51.9 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Hanstholm Skole </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:left;"> 46 % </td>
   <td style="text-align:left;"> 51.8 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Maribo Skole - Borgerskoleafdelingen </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:left;"> 46 % </td>
   <td style="text-align:left;"> 51.8 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Arenaskolen </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:left;"> 62 % </td>
   <td style="text-align:left;"> 51.5 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Eskilstrup Skole </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:left;"> 45 % </td>
   <td style="text-align:left;"> 51.5 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Stubbekøbing Skole </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:left;"> 47 % </td>
   <td style="text-align:left;"> 49.9 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Tovshøjskolen </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:left;"> 61 % </td>
   <td style="text-align:left;"> 49.8 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Nordvestskolen, Ravnsborg afdeling </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:left;"> 49 % </td>
   <td style="text-align:left;"> 49.1 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> H. C. Andersen Skolen </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:left;"> 61 % </td>
   <td style="text-align:left;"> 47.3 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Tingbjerg heldagsskole </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:left;"> 60 % </td>
   <td style="text-align:left;"> 47.3 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Gadehaveskolen </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:left;"> 60 % </td>
   <td style="text-align:left;"> 46.3 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Særslev-Hårslev-Skolen </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:left;"> 42 % </td>
   <td style="text-align:left;"> 46.2 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Læssøesgades Skole </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:left;"> 46 % </td>
   <td style="text-align:left;"> 46.1 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Grønhøjskolen </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:left;"> 52 % </td>
   <td style="text-align:left;"> 46.1 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Skælskør Skole </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:left;"> 47 % </td>
   <td style="text-align:left;"> 44.2 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Svend Gønge-Skolen, Lundby </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:left;"> 48 % </td>
   <td style="text-align:left;"> 44 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Lille Næstved Skole, afd. Fuglebjerg </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:left;"> 46 % </td>
   <td style="text-align:left;"> 43.7 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Møn Skole, Stege </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:left;"> 44 % </td>
   <td style="text-align:left;"> 43.7 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Sydfalster Skole </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:left;"> 42 % </td>
   <td style="text-align:left;"> 43.6 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Tagensbo Skole </td>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:left;"> 60 % </td>
   <td style="text-align:left;"> 43.6 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Abildgårdskolen </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:left;"> 55 % </td>
   <td style="text-align:left;"> 43.4 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Blågård Skole </td>
   <td style="text-align:right;"> 56 </td>
   <td style="text-align:left;"> 59 % </td>
   <td style="text-align:left;"> 43.3 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Søndre Skole, Rødby </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:left;"> 50 % </td>
   <td style="text-align:left;"> 42.9 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Hirtshals undervisningssted </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:left;"> 48 % </td>
   <td style="text-align:left;"> 42.9 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Mørkhøj Skole </td>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:left;"> 46 % </td>
   <td style="text-align:left;"> 42.2 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Midtskolen, Sofiendal afdeling </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:left;"> 41 % </td>
   <td style="text-align:left;"> 41.9 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Brændgårdskolen </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:left;"> 35 % </td>
   <td style="text-align:left;"> 41.1 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Marienhoffskolen </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:left;"> 37 % </td>
   <td style="text-align:left;"> 41 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Rådmandsgades Skole </td>
   <td style="text-align:right;"> 62 </td>
   <td style="text-align:left;"> 57 % </td>
   <td style="text-align:left;"> 40.4 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Amagerskolen </td>
   <td style="text-align:right;"> 35 </td>
   <td style="text-align:left;"> 44 % </td>
   <td style="text-align:left;"> 40.4 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Vejlebroskolen </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:left;"> 47 % </td>
   <td style="text-align:left;"> 39.3 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Ikast Vestre Skole </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:left;"> 40 % </td>
   <td style="text-align:left;"> 39.3 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Skærbæk Distriktsskole </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:left;"> 45 % </td>
   <td style="text-align:left;"> 38.8 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Ålholm Skole </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:left;"> 56 % </td>
   <td style="text-align:left;"> 38.4 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Nysted Skole </td>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:left;"> 47 % </td>
   <td style="text-align:left;"> 38.4 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Åboulevarden </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:left;"> 33 % </td>
   <td style="text-align:left;"> 38.2 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Høje Kolstrup Skole </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:left;"> 39 % </td>
   <td style="text-align:left;"> 37.8 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Strandgårdskolen </td>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:left;"> 46 % </td>
   <td style="text-align:left;"> 37.5 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Urbanskolen, Urban P </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:left;"> 36 % </td>
   <td style="text-align:left;"> 37.2 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Skolen i Midten </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:left;"> 33 % </td>
   <td style="text-align:left;"> 37.2 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Ullerup Bæk Skolen, Nr. Alle </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:left;"> 38 % </td>
   <td style="text-align:left;"> 37.2 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Signaturskolen, Kvaglund </td>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:left;"> 35 % </td>
   <td style="text-align:left;"> 37 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Ulstrup Skole </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:left;"> 34 % </td>
   <td style="text-align:left;"> 36.7 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Nørreskov-Skolen </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:left;"> 34 % </td>
   <td style="text-align:left;"> 36.7 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Kolind Centralskole </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:left;"> 33 % </td>
   <td style="text-align:left;"> 36.7 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Vejle Midtbyskole </td>
   <td style="text-align:right;"> 57 </td>
   <td style="text-align:left;"> 46 % </td>
   <td style="text-align:left;"> 36.4 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Baltorpskolen - Rugvænget </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:left;"> 46 % </td>
   <td style="text-align:left;"> 36.4 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Dalumskolen </td>
   <td style="text-align:right;"> 56 </td>
   <td style="text-align:left;"> 41 % </td>
   <td style="text-align:left;"> 36.4 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Nymarkskolen </td>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:left;"> 41 % </td>
   <td style="text-align:left;"> 36.1 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Korsvejens Skole </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:left;"> 40 % </td>
   <td style="text-align:left;"> 36.1 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Toftegårdsskolen </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:left;"> 34 % </td>
   <td style="text-align:left;"> 35.8 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Baltorpskolen - Grantoften </td>
   <td style="text-align:right;"> 55 </td>
   <td style="text-align:left;"> 48 % </td>
   <td style="text-align:left;"> 35.4 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Nørrevangsskolen </td>
   <td style="text-align:right;"> 55 </td>
   <td style="text-align:left;"> 54 % </td>
   <td style="text-align:left;"> 35.3 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Nr Alslev Skole </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:left;"> 41 % </td>
   <td style="text-align:left;"> 34.8 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Vesterbro Ny Skole </td>
   <td style="text-align:right;"> 75 </td>
   <td style="text-align:left;"> 52 % </td>
   <td style="text-align:left;"> 34.6 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Brædstrup Skole </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:left;"> 38 % </td>
   <td style="text-align:left;"> 34.5 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Breum Skole </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:left;"> 31 % </td>
   <td style="text-align:left;"> 34.3 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Gildbroskolen </td>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:left;"> 47 % </td>
   <td style="text-align:left;"> 34.2 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Roslev Skole </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:left;"> 30 % </td>
   <td style="text-align:left;"> 34.1 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Frederiksværk skole, Enghave </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:left;"> 40 % </td>
   <td style="text-align:left;"> 34 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Nordskolen - afdeling Højby </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:left;"> 43 % </td>
   <td style="text-align:left;"> 34 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Distriktsskolen </td>
   <td style="text-align:right;"> 43 </td>
   <td style="text-align:left;"> 34 % </td>
   <td style="text-align:left;"> 33.9 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Ejerslykkeskolen </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:left;"> 42 % </td>
   <td style="text-align:left;"> 33.7 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Herstedlund Skole </td>
   <td style="text-align:right;"> 60 </td>
   <td style="text-align:left;"> 46 % </td>
   <td style="text-align:left;"> 33.6 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Seden Skole </td>
   <td style="text-align:right;"> 60 </td>
   <td style="text-align:left;"> 46 % </td>
   <td style="text-align:left;"> 33.6 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Kirstinebjergskolen, Havepladsvej </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:left;"> 35 % </td>
   <td style="text-align:left;"> 33.5 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Avedøre Skole </td>
   <td style="text-align:right;"> 67 </td>
   <td style="text-align:left;"> 41 % </td>
   <td style="text-align:left;"> 33.5 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Nørrebro Park Skole </td>
   <td style="text-align:right;"> 72 </td>
   <td style="text-align:left;"> 53 % </td>
   <td style="text-align:left;"> 33.5 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Skovvangskolen </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:left;"> 31 % </td>
   <td style="text-align:left;"> 33.4 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Nordals skolen </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:left;"> 36 % </td>
   <td style="text-align:left;"> 33.3 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Nordvestskolen </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:left;"> 35 % </td>
   <td style="text-align:left;"> 33.1 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Hannæs-Østerild Skole </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:left;"> 32 % </td>
   <td style="text-align:left;"> 33 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Hendriksholm Skole </td>
   <td style="text-align:right;"> 64 </td>
   <td style="text-align:left;"> 38 % </td>
   <td style="text-align:left;"> 32.9 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Charlotteskolen </td>
   <td style="text-align:right;"> 43 </td>
   <td style="text-align:left;"> 37 % </td>
   <td style="text-align:left;"> 32.6 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Engstrandskolen </td>
   <td style="text-align:right;"> 56 </td>
   <td style="text-align:left;"> 38 % </td>
   <td style="text-align:left;"> 32.1 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Sct. Jørgens Skole </td>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:left;"> 31 % </td>
   <td style="text-align:left;"> 32.1 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Hammerum Skole </td>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:left;"> 39 % </td>
   <td style="text-align:left;"> 31.4 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Langmarkskolen </td>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:left;"> 37 % </td>
   <td style="text-align:left;"> 31.2 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NOVAskolen </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:left;"> 34 % </td>
   <td style="text-align:left;"> 31 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Ulkebøl Skole </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:left;"> 33 % </td>
   <td style="text-align:left;"> 31 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Birkhovedskolen </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:left;"> 38 % </td>
   <td style="text-align:left;"> 30.9 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Munkebo Skole - mellem nor og fjord </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:left;"> 35 % </td>
   <td style="text-align:left;"> 30.7 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Ørum Skole </td>
   <td style="text-align:right;"> 62 </td>
   <td style="text-align:left;"> 38 % </td>
   <td style="text-align:left;"> 30.6 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Farsø Skole </td>
   <td style="text-align:right;"> 69 </td>
   <td style="text-align:left;"> 34 % </td>
   <td style="text-align:left;"> 30.5 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Risingskolen </td>
   <td style="text-align:right;"> 74 </td>
   <td style="text-align:left;"> 39 % </td>
   <td style="text-align:left;"> 30.5 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Højmarkskolen </td>
   <td style="text-align:right;"> 55 </td>
   <td style="text-align:left;"> 33 % </td>
   <td style="text-align:left;"> 30.4 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Skolen ved Rønnebær Allé </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:left;"> 35 % </td>
   <td style="text-align:left;"> 30.4 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Arresø Skole, Magleblik </td>
   <td style="text-align:right;"> 65 </td>
   <td style="text-align:left;"> 43 % </td>
   <td style="text-align:left;"> 30.3 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Skolen ved Gurrevej </td>
   <td style="text-align:right;"> 60 </td>
   <td style="text-align:left;"> 34 % </td>
   <td style="text-align:left;"> 29.6 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Gungehusskolen </td>
   <td style="text-align:right;"> 60 </td>
   <td style="text-align:left;"> 34 % </td>
   <td style="text-align:left;"> 29.6 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Thorning Skole </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:left;"> 30 % </td>
   <td style="text-align:left;"> 29.5 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Glostrup Skole, Skovvang </td>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:left;"> 36 % </td>
   <td style="text-align:left;"> 29.4 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Ikast Østre Skole </td>
   <td style="text-align:right;"> 68 </td>
   <td style="text-align:left;"> 38 % </td>
   <td style="text-align:left;"> 29.3 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Dagnæsskolen </td>
   <td style="text-align:right;"> 54 </td>
   <td style="text-align:left;"> 36 % </td>
   <td style="text-align:left;"> 29.3 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Gribskolen </td>
   <td style="text-align:right;"> 57 </td>
   <td style="text-align:left;"> 38 % </td>
   <td style="text-align:left;"> 29 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Østerbyskolen </td>
   <td style="text-align:right;"> 57 </td>
   <td style="text-align:left;"> 38 % </td>
   <td style="text-align:left;"> 29 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Mølleholmskolen </td>
   <td style="text-align:right;"> 76 </td>
   <td style="text-align:left;"> 34 % </td>
   <td style="text-align:left;"> 28.6 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Seminarieskolen </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:left;"> 33 % </td>
   <td style="text-align:left;"> 28.2 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Sønderskov-Skolen </td>
   <td style="text-align:right;"> 68 </td>
   <td style="text-align:left;"> 35 % </td>
   <td style="text-align:left;"> 28.2 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Distrikt Nord, Skagen skoleafdeling </td>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:left;"> 32 % </td>
   <td style="text-align:left;"> 28.1 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Tungelundskolen </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:left;"> 29 % </td>
   <td style="text-align:left;"> 27.9 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Herlev byskole </td>
   <td style="text-align:right;"> 84 </td>
   <td style="text-align:left;"> 36 % </td>
   <td style="text-align:left;"> 27.7 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Borgerskolen </td>
   <td style="text-align:right;"> 78 </td>
   <td style="text-align:left;"> 39 % </td>
   <td style="text-align:left;"> 27 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Hasle Skole </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:left;"> 34 % </td>
   <td style="text-align:left;"> 27 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Herstedvester Skole </td>
   <td style="text-align:right;"> 93 </td>
   <td style="text-align:left;"> 43 % </td>
   <td style="text-align:left;"> 26.8 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Søndervangskolen </td>
   <td style="text-align:right;"> 103 </td>
   <td style="text-align:left;"> 47 % </td>
   <td style="text-align:left;"> 26.8 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Skolen ved Bulowsvej </td>
   <td style="text-align:right;"> 92 </td>
   <td style="text-align:left;"> 40 % </td>
   <td style="text-align:left;"> 26.8 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Sophieskolen </td>
   <td style="text-align:right;"> 81 </td>
   <td style="text-align:left;"> 43 % </td>
   <td style="text-align:left;"> 26.3 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Rønneskolen, afdeling Åvang </td>
   <td style="text-align:right;"> 74 </td>
   <td style="text-align:left;"> 40 % </td>
   <td style="text-align:left;"> 25.6 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Bakkegårdsskolen </td>
   <td style="text-align:right;"> 76 </td>
   <td style="text-align:left;"> 39 % </td>
   <td style="text-align:left;"> 25.2 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Sofiendalskolen </td>
   <td style="text-align:right;"> 64 </td>
   <td style="text-align:left;"> 31 % </td>
   <td style="text-align:left;"> 25.1 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Horsens Byskole, folkeskoleafdeling </td>
   <td style="text-align:right;"> 106 </td>
   <td style="text-align:left;"> 50 % </td>
   <td style="text-align:left;"> 24.8 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Tarm Skole </td>
   <td style="text-align:right;"> 62 </td>
   <td style="text-align:left;"> 34 % </td>
   <td style="text-align:left;"> 24.5 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Brøndby Strand Skole </td>
   <td style="text-align:right;"> 104 </td>
   <td style="text-align:left;"> 41 % </td>
   <td style="text-align:left;"> 23.6 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Tingstrup Skole </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:left;"> 29 % </td>
   <td style="text-align:left;"> 22.9 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Auning Skole </td>
   <td style="text-align:right;"> 74 </td>
   <td style="text-align:left;"> 32 % </td>
   <td style="text-align:left;"> 21.3 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Dueholmskolen </td>
   <td style="text-align:right;"> 91 </td>
   <td style="text-align:left;"> 32 % </td>
   <td style="text-align:left;"> 21.2 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Distrikt Øst, Nordstjernenskoleafdeling </td>
   <td style="text-align:right;"> 92 </td>
   <td style="text-lign:left;"> 32 % </td>
   <td style="text-align:left;"> 19.5 % </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Distrikt Øst, Frydenstrandskoleafdeling </td>
   <td style="text-align:right;"> 79 </td>
   <td style="text-align:left;"> 29 % </td>
   <td style="text-align:left;"> 19.1 % </td>
  </tr>
  
</tbody>
</table>


[^1]: [Karakterer for millioner](https://www.weekendavisen.dk/2018-30/samfund/karakterer-for-millioner)
[^2]: The Ministry of Education seems to [think](https://uvm.dk/aktuelt/nyheder/uvm/2017/april/170425-500-mio--kr--til-loeft-af-fagligt-svage-elever) that the negation of getting at least 4 in both Danish and Mathematics is getting less than 4 in both Danish and Mathematics. At one place the hope is to reduce the percentage of students who get less than 4 in Danish and Mathematics ("For at få del i puljen skal skolerne i hvert af de tre år reducere andelen af elever, der får under karakteren 4 i dansk og matematik") at another place it is the percentage of students who doesn't get at least 4 in danish and mathematics  ("[...] forstået som andelen af elever, der ikke opnår mindst 4 i dansk og matematik i 9.-klasseprøverne")
[^3]: I assume that each school has an inherent probability that a graduating student will get at least 4 in danish and mathematics. The prior distribution for this probability is modelled by a beta distribution. The parameters of this distribution is chosen such that the mean is .22 (the national average) and the probability of being larger than .41 is 0.0431 (I assume all schools performing worse than .41 are part of the initiative). The posterior distribution for each school is again a beta distribution calculated from the baseline performance and the number of students graduating in 3 years.
[^4]: The sizes of the schools are approximate and based on [this](https://uvm.dk/statistik/grundskolen/elever/elevtal-i-grundskolen) list of school sizes supplemented with information from individual schools websites.