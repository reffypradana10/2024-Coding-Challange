// WPU Codding Callange
// Sum of positive
// Day 24
// https://www.codewars.com/kata/5715eaedb436cf5606000381
// You get an array of numbers, return the sum of all of the positives ones.

// Cara bar-bar
// const positiveSum = (data) => {
//   let vabKosong = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] > 0) {
//       vabKosong += data[i];
//     }
//   }
//   return vabKosong;
// };

// pakai filter dan reduce
// const positiveSum = data => data.filter(a=> a > 0).reduce((acc,curr)=> acc+curr,0)

// pakai reduce doang
// const positiveSum = (data) => data.reduce((acc, curr) => (curr > 0 ? curr + acc :acc),0);

// Cara lain nemu di solution codewars [CLEVER BANGET]
const positiveSum = (data) => {
  let vabKosong = 0;
  data.forEach((a) => {
    if (a > 0) vabKosong += a;
  });
  return vabKosong;
};

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
