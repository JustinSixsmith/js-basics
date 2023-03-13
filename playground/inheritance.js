function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  // Shape.prototype.duplicate.call(this);

  console.log('duplicate circle');
};

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log('duplicate square');
};

const shapes = [new Circle(), new Square()];

for (let shape of shapes) shape.duplicate();

// function Shape(color) {
//   this.color = color;
// }

// Shape.prototype.duplicate = function () {
//   console.log('duplicate');
// };

// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Circle(radius, color) {
//   Shape.call(this, color);

//   this.radius = radius;
// }

// extend(Circle, Shape);

// Circle.prototype.draw = function () {
//   console.log('draw');
// };

// function Square(size) {
//   Shape.call(this, color);
//   this.size = size;
// }

// extend(Square, Shape);

// const s = new Shape();
// const c = new Circle(1, 'red');
// const sq = new Square(10);

// function Circle(radius) {
//   this.radius = radius;

//   this.move = function () {
//     console.log('move');
//   };
// }

// Circle.prototype.draw = function () {
//   console.log('draw');
// };

// const c1 = new Circle(1);
// const c2 = new Circle(1);

// Circle.prototype.toString = function () {
//   return 'Circle with radius ' + this.radius;
// };

// let person = { name: 'Justin' };

// Object.defineProperty(person, 'name', {
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });

// delete person.name;

// // console.log(person);

// // console.log(Object.getPrototypeOf(person));

// function Circle(radius) {
//   this.radius = radius;
//   let defaultLocation = { x: 0, y: 0 };
//   this.getDefaultLocation = function () {
//     return defaultLocation;
//   };
//   this.draw = function () {
//     console.log('draw');
//   };
//   Object.defineProperty(this, 'defaultLocation', {
//     get: function () {
//       return defaultLocation;
//     },
//     set: function (value) {
//       if (!value.x || !value.y) throw new Error('Invalid location.');
//       defaultLocation = value;
//     },
//   });
// }

// console.log(Object.prototype);

// const circle = new Circle(10);
// console.log(circle);

// // Facotry Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const circle1 = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };

// const circle = createCircle(1);

// const another = new Circle(10);

// const keys = Object.keys(another);
// console.log(keys);

// for (let key in another) {
//   if (typeof circle[key] !== "function") console.log(key, circle[key]);
// }
