// To make regular nouns plural, add ‑s to the end.
//  If the singular noun ends in ‑s, -ss, -sh, -ch, -x, or -z, add ‑es to the end to make

const checkPlural = str => /([^auios]s$|es$|photos|pianos|halos|volcanos)/gim.test(str)
console.log(checkPlural("bus"))