// WPU Codding Callange
// Abbreviate a Two Word Name
// Day 28
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// Cara Barbar
// function abbrevName(name) {
//   return name.split(" ").map((bagian) => bagian[0].toUpperCase()).join(".")
// }

// One-liner
const abbrevName = (name) =>
  name
    .split(" ")
    .map((part) => part[0].toUpperCase())
    .join(".");

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
