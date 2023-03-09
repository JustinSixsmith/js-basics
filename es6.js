'use strict';

// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     console.log('draw');
//   };
// }

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//     this.move = function () {};
//   }

//   draw() {
//     console.log('draw');
//   }

//   static parse(str) {
//     const radius = JSON.parse(str).radius;
//     return new Circle(radius);
//   }
// }

// // const c = new Circle(1);
// const circle = Circle.parse('{ "radius": 1 }');

const _radius = Symbol();
const _draw = Symbol();
class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {}
}
