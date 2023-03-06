const circle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);

// function sum(...numbers) {
//     if (numbers.length === 1 && Array.isArray(numbers[0])) {
//         numbers = [...numbers[0]];
//     }
//     return numbers.reduce((a, b) => a + b);
// }
//
// console.log(sum([1, 2, 3, 4]));

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(tag => console.log(this.title, tag));
//     }
// };
//
// video.showTags();

// const person = {
//     firstName: "Justin",
//     lastName: "Sixsmith",
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(value) {
//         if (typeof value !== 'string')
//             throw new Error('Value is not a string.');
//         const parts = value.split(' ');
//         if (parts.length !== 2)
//             throw new Error('Enter a first and last name.');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };
//
// try {
//     person.fullName = '';
// } catch (e) {
//     alert(e);
// }
//
// console.log(person);

// function interest(principal, rate = 3.5, years = 5) {
//     return principal * rate / 100 * years;
// }
//
// console.log(interest(10000));

// function sum(discount, ...prices) {
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }
//
// console.log(sum(0.1, 20, 30));

// const movies = [
//     {title: 'a', year: 2018, rating: 4.5},
//     {title: 'b', year: 2018, rating: 4.7},
//     {title: 'c', year: 2018, rating: 3},
//     {title: 'd', year: 2017, rating: 4.5},
// ];

// Find all the movies in 2018 with rating >= 4
// Sort them by their rating in descending¬ order
// Pick their title
// const titles = movies.filter(m => m.year === 2018 && m.rating >= 4)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map(m => m.title);
//
// console.log(titles);

// const numbers = [1, 1, 3, 1];
//
// const max = getMax(numbers);
//
// console.log(max);
//
// function getMax(array) {
//     if (array.length === 0) return undefined;
//     return array.reduce((a, b) => a > b ? a : b);
// }

// function getMax(array) {
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > max)
//             max = array[i];
//     }
//     return max;
// }

// const count = countOccurrences(numbers, 1);
//
// console.log(count);
//
// function countOccurrences(array, searchElement) {
//  return array.reduce((accumulator, current) => {
//    const occurrence = current === searchElement ? 1 : 0;
//    return accumulator + occurrence;
//  }, 0);
// }

// function countOccurrences(array, searchElement) {
//   return array.reduce((accumulator, current) => {
//     const occurrence = current === searchElement ? 1 : 0;
//     return accumulator + occurrence;
//   }, 0);
// }

// const output = move(numbers, 5, 6);

// console.log(output);

// function move(array, index, offset) {
//   let newIndex = index + offset;
//   if (newIndex >= array.length || newIndex < 0)
//     console.error("Invalid offset.");
//   return;

//   const output = [...array];
//   let element = output.splice(index, 1)[0];
//   output.splice(newIndex, 0, element);
//   return output;
// }

// const output = except(numbers, [1]);
// console.log(output);

// function except(array, excluded) {
//   const output = [];
//   for (let element of array)
//     if (!excluded.includes(element)) output.push(element);
//   return output;
// }

// function findNumber(array, searchElement) {
//   for (let element of array) if (element === searchElement) return true;
//   return false;
// }

// console.log(numbers.includes(1));
// console.log(findNumber(numbers, 44));

// const numbers = arrayFromRange(-4, 10);
// console.log(numbers);

// function arrayFromRange(min, max) {
//   let array = [];
//   for (let i = min; i <= max; i++) array.push(i);
//   return array;
// }

// const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers) sum += n;

// let sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(sum);

// const items = numbers
//   .filter((n) => n >= 0)
//   .map((n) => ({ value: n }))
//   .filter((obj) => obj.value > 1)
//   .map((obj) => obj.value);
// console.log(items);

// const items = filtered.map((n) => "<li>" + n + "</li>");

// const html = "<ul>" + items.join("") + "</ul>";
// console.log(html);

// const restaurants = [
//   { id: 1, isOpen: true },
//   { id: 2, isOpen: false },
// ];

// console.log(filtered);
// const openRestaurants = restaurants.filter((restaurant) => restaurant.isOpen);
// console.log(openRestaurants);

// const allPositive = numbers.every((value) => value >= 0);
// console.log(allPositive);
// const somePositive = numbers.some((value) => value >= 0);
// console.log(somePositive);

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

// Factory Function:
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

// Constructor Function:
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
