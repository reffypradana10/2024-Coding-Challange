// WPU Codding Callange
// Fake Binary
// Day 33
// Kata 8
// https://www.codewars.com/kata/57eae65a4321032ce000002d
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// barbar code
// function fakeBin(x){
//     z = x.split('')
//     re = []
//     for(let i=0; i < z.length;i++){
//         if(z[i] < 5){
//             re.push(0)
//         }else{
//             re.push(1)
//         }
//     }
//     return re.join("")
// }

// Clean Code
const fakeBin = (x) =>
  x
    .split("")
    .map((a) => (a > 5 ? 1 : 0))
    .join("");

console.log(fakeBin("45385593107843568"));
console.log(fakeBin("509321967506747"));
