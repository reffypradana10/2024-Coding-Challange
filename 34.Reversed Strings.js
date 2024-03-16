// WPU Codding Callange
// Reversed Strings
// Day 34
// Kata 8
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
// Complete the solution so that it reverses the string passed into it.

// barbar code
// function solution(str){
//   return str.split('').reduce((a,b)=>b+a,'')
// }

// pakai reduce
// const solution = s => s.split('').reduce((a,b)=>b+a)

// pakai reverse dan join
// const solution = s => s.split('').reverse().join('')

// ada cara codewars
const solution = (s) => [...s].reduce((a, b) => b + a);

console.log(solution("world"));
console.log(solution("hello"));
