// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i >= 1; i--) {
//     //   console.log(i);
//     result.push(i);
//   }

//   return result;
// };

const reverseSeq = (n) =>
  Array(n)
    .fill()
    .map((el, i) => n - i);

console.log(reverseSeq(5));
