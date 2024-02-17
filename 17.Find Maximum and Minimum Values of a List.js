// WPU Codding Callange
// Day 17
// https://www.codewars.com/kata/577a98a6ae28071780000989
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

var min = function (list) {
  let minValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (minValue > list[i]) {
      minValue = list[i];
    }
  }
  return list[0];
};

var max = function (list) {
  return list[0];
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
