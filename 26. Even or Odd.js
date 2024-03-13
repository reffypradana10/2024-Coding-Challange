// WPU Codding Callange
// Even or Odd
// Day 26
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Bener2 Simple
const evenOrOdd = (number) => (number % 2 == 0 ? "Even" : "Odd");
console.log(evenOrOdd(2));
console.log(evenOrOdd(7));
console.log(evenOrOdd(-42));
console.log(evenOrOdd(-7));
console.log(evenOrOdd(0));
