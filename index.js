const numbers = [1, -1, 2, 3];

const allPositive = numbers.every((value) => value >= 0);
console.log(allPositive);
const somePositive = numbers.some((value) => value >= 0);
console.log(somePositive);

// numbers.forEach((number, index) => console.log(index, number));

// const courses = [
//   { id: 2, name: "Node.js" },
//   { id: 1, name: "javaScript" },
// ];

// courses.sort(function (a, b) {
//   // return a.id - b.id;

//   const nameA = a.name.toLocaleUpperCase;
//   const nameB = b.name.toLocaleUpperCase;
//   if (nameA < nameB) return -1;
//   if (nameB < nameA) return 1;
// });

// console.log(courses);

// let h = 30;

// pyramid(h);

// function pyramid(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let space = makeRoom(rows - row);
//     let layer = makeRow(row);
//     console.log(space + layer);
//   }
// }

// function makeRow(row) {
//   let pattern = "";
//   for (let i = 0; i < row; i++) pattern += "*";
//   return pattern + "^" + pattern;
// }

// function makeRoom(space) {
//   let room = "";
//   for (let i = space; i > 0; i--) {
//     room += " ";
//   }
//   return room;
// }

// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// const course = courses.find((course) => course.name === "a");

// console.log(course);

// let priceRanges = [
//   {
//     label: "$",
//     tooltip: "Inexpensive",
//     minPerPerson: 0,
//     maxPerPerson: 10,
//   },
//   {
//     label: "$$",
//     tooltip: "Moderate",
//     minPerPerson: 11,
//     maxPerPerson: 20,
//   },
//   {
//     label: "$$$",
//     tooltip: "Expensive",
//     minPerPerson: 21,
//     maxPerPerson: 50,
//   },
// ];

// let restaurants = [{ averagePerPerson: 5 }];

// function Post(title, body, author) {
//   (this.title = title),
//     (this.body = body),
//     (this.author = author),
//     (this.views = 0),
//     (this.comments = []),
//     (isLive = false);
// }

// console.log(new Post("a", "b", "c"));

// let post = {
//   title: "a",
//   body: "b",
//   author: "c",
//   views: 10,
//   comments: [
//     {
//       author: "a",
//       body: "b",
//     },
//     {
//       author: "c",
//       body: "d",
//     },
//   ],
//   isLive: true,
// };

// console.log(post);

// let address1 = new Address("a", "b", "c");
// let address2 = new Address("a", "b", "c");

// function Address(street, city, zipCode) {
//   (this.street = street), (this.city = city), (this.zipCode = zipCode);
// }

// function isEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   );
// }

// function isSame(address1, address2) {
//   return address1 === address2;
// }

// console.log(isEqual(address1, address2));
// console.log(isSame(address1, address2));

// const address = {
//   street: "2730 Stone Edge St",
//   city: "San Antonio",
//   zipCode: 78232,
// };

// function showAddress(address) {
//   for (let key in address) {
//     console.log(key, address[key]);
//   }
// }

// showAddress(address);

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// const another = { ...circle };

// console.log(another);

// const another = Object.assign(
//   {
//     color: "yellow",
//   },
//   circle
// );

// const another = {};
// for (let key in circle)
//   another[key] = circle[key];

// for (let key in circle) {
//   console.log(key, circle[key]);
// }

// for (let key of Object.keys(circle)) {
//   console.log(key);
// }

// for (let entry of Object.entries(circle)) {
//   console.log(entry);
// }

// if ("radius" in circle) console.log("yes");

// Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const myCircle = createCircle(1);
// console.log(myCircle);
// console.log(myCircle.draw);

// Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(1);
// console.log(circle);

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

// showPrimes(49);

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++)
//     if (isPrime(number)) console.log(number);
// }

// function showPrimes(number) {
//   for (let factor = 2; factor < number; factor++)
//     if (number % factor === 0) return false;

//   return true;
// }
