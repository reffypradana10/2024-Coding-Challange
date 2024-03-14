// WPU Codding Callange
// Basic Mathematical Operations
// Day 27
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7
// Your task is to create a function that does four basic mathematical operations.

// Cara Barbar
// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//       break;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;
//     default:
//       break;
//   }
// }

// Nemu Cara di Codewars
const basicOp = (operation, value1, value2) => eval(value1 + operation + value2);

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
