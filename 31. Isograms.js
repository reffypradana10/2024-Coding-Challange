// WPU Codding Callange
// Isograms
// Day 31
// https://www.codewars.com/kata/54ba84be607a92aa900000f1
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.

// barbar code
function isIsogram(str) {
  // return new Set(str.toUpperCase()).size == str.length;
  let i = new Set(str);
  console.log(i);
  console.log(str.length);
}

// const isIsogram = str => new Set(str.toUpperCase()).size == str.length
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
