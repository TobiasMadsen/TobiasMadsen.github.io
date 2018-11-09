---
layout: post
title: Winning the School Lottery
subtitle: The Danish Ministry of Education has now paid out bonuses to the schools participating in the school initiative. They claim that 400 students were improved as a result. This number does however not hold up. 
author: "Tobias Madsen"
tags: [statistics, politics]
date: "2018/11/01"
image: "./detektor.jpg"
---

In a previous [post](/2018/08/11/lottery-tickets-to-danish-schools/) I dived into the Danish Ministry of Educations 
school initiative to lift schools having a large amount of students with poor academic performance. The point made in 
the post was that the evaluation of the schools relied on so little data, that the payouts would be a lottery. A couple 
of months ago the winners of the lottery were announced. In a press release the ministry claims that 400 students 
improved their performances as a result of the initiative [^1].

<blockquote>
The 62 schools have on average decreased the proportion of students on that level with almost 14 percentage points 
compared to their starting points. This amounts to the schools improving more than 400 students.
</blockquote>

The Danish Broadcasting Corporation (DR) gained access to documents detailing the performance for the schools this and 
the previous three years. They showed amongst other things, that there were schools that received the payout but had 
decreased their general performance [^2]. I asked them to share their data, suspecting the ministry hadn't accounted for
regression towards the mean when reporting the 400 students. It turned out that not only had the ministry not accounted 
for regression towards the mean, they also only included schools who actually improved and not all schools who took part
in the initiative and they used a regular mean where a weighted mean should have been applied. With these errors the 
true number of students improved as a result of the initiative is around 220 rather than 400.


I shared this finding with DR where it was used as part of a larger section on the initiative in their fact-checking
programme "Detektor" the 18th of October [^3].

To come up with the figure 400, the ministry only included the schools who got a payout from the initiative. They then
computed the average improvement for these schools and multiplied it onto the total number of students graduating from 
these schools. By this method they arrived at 405. There are three problems with this calculation:  
<br/>
1. To begin with you can not take an un-weighted average improvement over all the schools and then apply it to the total
number of students. It turns out that the small schools have improved more than the larger schools (which is to be 
expected as small schools will regress harder toward the mean). Taking the weighted average instead brings the number 
down to 355 students. 
2. Only including the improved schools when accounting for the number of improved students is a very blunt form of 
cherry-picking. Including all schools that have participated in the initiative brings the number down to 287. Where the
first mistake is embarrassing, this second mistake is deceitful. 
3. Finally, as mentioned in the previous post, one must take care to account for regression toward the mean. The schools
in the initiative were selected for poor performance. Being on such a list is a product of bad luck and true effects such as 
socioeconomic factors. Where the true effects remain, luck changes from year to year. Accounting for regression to the 
mean the number is down to 221 students. This number is subject to some uncertainty, as we need to estimate the effect 
of regression towards the mean. This last mistake is more forgivable but a mistake nonetheless. 

A data sheet with the schools, their baseline performance, number of students, performance this year etc. can be found 
[here](/assets/winning-the-school-lottery/skoler.csv).

<br />

[^1]: [The Ministry of Education: 62 skoler får penge fra skolepuljen](https://uvm.dk/aktuelt/nyheder/uvm/2018/sep/180919-61-skoler-faar-penge-fra-skolepuljen)
[^2]: [DR: Elever får dårligere karakterer, men skolerne bliver belønnet med 8 millioner kroner](https://www.dr.dk/nyheder/indland/elever-faar-daarligere-karakterer-men-skolerne-bliver-beloennet-med-8-millioner)
[^3]: [DR: Detektor 18th October](https://www.dr.dk/tv/se/detektor-tv/detektor-10/detektor-2018-10-18)