// WPU Codding Callange
// Convert a String to a Number!
// Day 35
// Kata 8
// https://www.codewars.com/kata/544675c6f971f7399a000e79
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// barbar code
// const stringToNumber = function(str){
//     return parseInt(str)
//   }

// Simple Code pakai parseInt
// const stringToNumber = str => parseInt(str)

// Pakai Number
// const stringToNumber = str => Number(str)

// Pakai Math.floor
const stringToNumber = (str) => Math.floor(str);

console.log(stringToNumber("1234"));
