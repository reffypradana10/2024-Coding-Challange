// WPU Codding Callange
// String repeat
// Day 25
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Cara bar bar
// function repeatStr(n, s) {
//   let kata = [];
//   for (let i = 0; i < n; i++) {
//     kata += s;
//   }
//   return kata;
// }
// best clever, engga kepikiran pakai method repeat
const repeatStr = (n, s) => s.repeat(n);
console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));
