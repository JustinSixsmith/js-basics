// let a = "red";
// let b = "blue";

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// function max(a, b) {
//   return a > b ? a : b;
// }

// console.log(max(3, 5));

// function fizzBuzz(input) {
//   if (typeof input !== "number") {
//     return "Input is not a number.";
//   }
//   if (input % 3 === 0 && input % 5 === 0) {
//     return "FizzBuzz";
//   }
//   if (input % 3 === 0) {
//     return "Fizz";
//   }
//   if (input % 5 === 0) {
//     return "Buzz";
//   }
//   return input;
// }

// console.log(fizzBuzz(16));

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   if (typeof speed !== "number") {
//     return NaN;
//   }
//   if (speed <= 74) {
//     return "Ok";
//   }

//   let points = (speed - speedLimit) / 5;
//   if (points >= 12) {
//     return "License suspended";
//   }
//   return Math.floor(points);
// }

// console.log(checkSpeed(73));

// showStars(5);

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) {
//       pattern += "*";
//     }
//     console.log(pattern);
//   }
// }

showPrimes(49);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function showPrimes(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}