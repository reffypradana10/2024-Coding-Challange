// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump / mpg <= fuelLeft
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump;

console.log(zeroFuel(100, 50, 1));
