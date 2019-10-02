

export function toLagsLaan(laan1, laan2, beloeb, proportion) {
  const laan1beregning = laanBeregner(laan1, beloeb * proportion / 100 / laan1.kurs * 100, [0, proportion * 0.8])
  const laan2beregning = laanBeregner(laan2, beloeb * (100-proportion) / 100 / laan2.kurs * 100, [proportion * 0.8, 80])

  var bidragsSats = 0
  if (proportion > 0) {
    bidragsSats += (laan1.afdragsfri > 0 ? laan1beregning.bidragsSatsAfdragsfri : laan1beregning.bidragsSats) * proportion
  }
  if (proportion < 100) {
    bidragsSats += (laan2.afdragsfri > 0 ? laan2beregning.bidragsSatsAfdragsfri : laan2beregning.bidragsSats)  * (100-proportion)
  }

  if (proportion == 0) {
    return etLagsLaan(laan2beregning, bidragsSats)
  }
  if (proportion == 100) {
    return etLagsLaan(laan1beregning, bidragsSats)
  }
  return {
    hovedstol: laan1beregning.hovedstol + laan2beregning.hovedstol,
    bidragsSats: bidragsSats,
    tkYdelse: laan1beregning.tkYdelse + laan2beregning.tkYdelse,
    tkYdelseEfterSkat: laan1beregning.tkYdelseEfterSkat + laan2beregning.tkYdelseEfterSkat,
    tkAfdrag: laan1beregning.tkAfdrag + laan2beregning.tkAfdrag,
    tkRenteOgBidragTotal: laan1beregning.tkRenteOgBidragTotal + laan2beregning.tkRenteOgBidragTotal,
    tkSamletBeloeb: laan1beregning.tkSamletBeloeb + laan2beregning.tkSamletBeloeb,
    afdrag: vecSum(laan1beregning.afdrag, laan2beregning.afdrag),
    restgaeld: vecSum(laan1beregning.restgaeld, laan2beregning.restgaeld),
    ydelse: vecSum(laan1beregning.ydelse, laan2beregning.ydelse),
  }
}

function etLagsLaan(laanBeregning, bidragsSats) {
  return {
    hovedstol: laanBeregning.hovedstol,
    bidragsSats: bidragsSats,
    tkYdelse: laanBeregning.tkYdelse,
    tkYdelseEfterSkat: laanBeregning.tkYdelseEfterSkat,
    tkAfdrag: laanBeregning.tkAfdrag,
    tkRenteOgBidragTotal: laanBeregning.tkRenteOgBidragTotal,
    tkSamletBeloeb: laanBeregning.tkSamletBeloeb,
    afdrag: laanBeregning.afdrag,
    restgaeld: laanBeregning.restgaeld,
    ydelse: laanBeregning.ydelse,
  }
}

export function laanBeregner(laan, hovedstol, interval) {
  const skat = 0.3

  const r = laan.rente / 4 // Rente per kvartal
  const bidragsSats = bidragsSatsBeregner([0.0045, 0.0085, 0.0120], interval)
  const bidragsSatsAfdragsfri = bidragsSatsBeregner([0.0055, 0.0115, 0.02], interval)

  const ydelseAfdragsfri = r * hovedstol
  const ydelse = annuitetsBeregner(hovedstol, r, laan.terminer - laan.afdragsfri)
  console.log('ydelse', ydelse)

  const renterVek = new Array(laan.terminer).fill(0)
  const bidragVek = new Array(laan.terminer).fill(0)
  const restgaeldVek = new Array(laan.terminer).fill(0)
  const ydelserVek = new Array(laan.terminer).fill(0)
  const skatVek = new Array(laan.terminer).fill(0)
  var restgaeld = hovedstol

  for (var i = 0; i <  laan.terminer; i++) {
    bidragVek[i] = (i >= laan.afdragsfri ? bidragsSats : bidragsSatsAfdragsfri) / 4 * restgaeld
    renterVek[i] = r * restgaeld
    skatVek[i] = (renterVek[i] + bidragVek[i]) * skat
    if (i >= laan.afdragsfri) {
      restgaeld = restgaeld * (1+r) - ydelse
      ydelserVek[i] = ydelse
    }
    else {
      ydelserVek[i] = ydelseAfdragsfri
    }
    restgaeldVek[i] = restgaeld
  }

  const ret = {
    hovedstol: hovedstol,
    ydelse   : vecSum(ydelserVek, bidragVek),
    bidrag   : bidragVek,
    renter   : renterVek,
    afdrag   : vecDiff(ydelserVek, renterVek),
    restgaeld: restgaeldVek,
    skat     : skatVek,
    bidragsSats : bidragsSats,
    bidragsSatsAfdragsfri : bidragsSatsAfdragsfri,
    // Genskab beregninger fra TotalKredit lån beregner
    tkYdelse                : gnsMaanedFoersteAar(ydelserVek) + gnsMaanedFoersteAar(bidragVek),
    tkYdelseEfterSkat       : gnsMaanedFoersteAar(ydelserVek) + gnsMaanedFoersteAar(bidragVek) - gnsMaanedFoersteAar(skatVek),
    tkAfdrag                : gnsMaanedFoersteAar(ydelserVek) - gnsMaanedFoersteAar(renterVek),
    tkYdelseEfterAfdragsFri : gnsMaanedFoersteAarEfterAfdragsFri(ydelserVek, laan.afdragsfri) + gnsMaanedFoersteAarEfterAfdragsFri(bidragVek, laan.afdragsfri),
    tkAfdragEfterAfdragsFri : gnsMaanedFoersteAarEfterAfdragsFri(ydelserVek, laan.afdragsfri) - gnsMaanedFoersteAarEfterAfdragsFri(renterVek, laan.afdragsfri),
    tkRenteOgBidragTotal    : sum(renterVek)+sum(bidragVek),
    tkSamletBeloeb          : sum(ydelserVek)+sum(bidragVek),
  }

  return ret
}

function vecDiff(arr1, arr2) {
    return arr1.map( (e,i) => e - arr2[i])
}

function vecSum(arr1, arr2) {
    var ret = []
    for (var i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        var toAdd = 0
        if (i < arr1.length) {
            toAdd += arr1[i]
        }
        if (i < arr2.length) {
            toAdd += arr2[i]
        }
        ret[i] = toAdd
    }
    return ret
}

function sum(arr) {
  return arr.reduce((acc, a) => acc + a, 0)
}

function gnsMaanedFoersteAar(arr) {
  return arr.slice(0,4).reduce((acc, a) => acc + a, 0) / 12
}

function gnsMaanedFoersteAarEfterAfdragsFri(arr, afdragsfriOffset) {
  return arr.slice(0 + afdragsfriOffset, 4 + afdragsfriOffset).reduce((acc, a) => acc + a, 0) / 12
}

function annuitetsBeregner(hovedstol, rente, terminer) {
  console.log("hoved", hovedstol, rente, terminer)
  console.log("pow", Math.pow(1+rente,terminer))
  return rente / (Math.pow(1+rente,terminer)-1)*hovedstol*Math.pow(1+rente,terminer)
}


function bidragsSatsBeregner(bidragPerInterval, interval = [0,80]) {
  const overlap_0_40 = overlapSize(0,40, interval[0], interval[1])
  const overlap_40_60 = overlapSize(40, 60, interval[0], interval[1])
  const overlap_60_80 = overlapSize(60, 80, interval[0], interval[1])

  const weightedSum = bidragPerInterval[0] * overlap_0_40 + bidragPerInterval[1] * overlap_40_60 + bidragPerInterval[2] * overlap_60_80
  const sumOfWeights = overlap_0_40 + overlap_40_60 + overlap_60_80

  const weightedAverage = weightedSum / sumOfWeights

  return weightedAverage
}

function overlapSize(a,b,c,d) {
    const ret = Math.min(b,d) - Math.max(a,c)
    return Math.max(ret, 0);
}
