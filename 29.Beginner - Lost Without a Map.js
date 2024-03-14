// WPU Codding Callange
// Beginner - Lost Without a Map
// Day 29
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e
// Given an array of integers, return a new array with each value doubled.

// Cara Barbar
// function maps(x){
//   return x.map((part)=>part+part)
// }

// Oneliner
const maps = (x) => x.map((part) => part * 2);
console.log(maps([1, 2, 3]));
console.log(maps([4, 1, 1, 1, 4]));
