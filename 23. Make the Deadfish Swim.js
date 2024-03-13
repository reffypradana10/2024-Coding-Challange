// WPU Codding Callange
// Day 23
// https://www.codewars.com/kata/51e0007c1f9378fa810002a9
// Write a simple parser that will parse and run Deadfish.

function parse(data) {
  let d = 0;
  dkosong = [];
  for (let s of data) {
    switch (s) {
      case "i":
        d++;
        break;
      case "d":
        d--;
        break;
      case "s":
        d = d * d;
        break;
      case "o":
        dkosong.push(d);
        break;
    }
  }
  return dkosong;
}
console.log(parse("iiisdoso"));
