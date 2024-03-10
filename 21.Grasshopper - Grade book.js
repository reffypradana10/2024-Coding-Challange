// WPU Codding Callange
// Day 21
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5
// omplete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(...s) {
  const score = s.reduce((acc, curr) => acc + curr) / s.length;

  if (score < 60) return "F";
  if (score < 70) return "D";
  if (score < 80) return "C";
  if (score < 90) return "B";
  return "A";
}

console.log(getGrade(66, 62, 68));
