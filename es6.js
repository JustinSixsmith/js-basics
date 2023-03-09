'use strict';

class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log('circle move');
  }
}

// class Shape {
//   constructor(color) {
//     this.color = color;
//   }

//   move() {
//     console.log('move');
//   }
// }

// class Circle extends Shape {
//   constructor(color, radius) {
//     super(color);
//     this.radius = radius;
//   }

//   draw() {
//     console.log('draw');
//   }
// }

// const c = new Circle('red', 1);

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

// const _radius = Symbol();
// const _draw = Symbol();
// class Circle {
//   constructor(radius) {
//     this[_radius] = radius;
//   }

//   [_draw]() {}
// }

// const _radius = new WeakMap();
// const _move = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);

//     _move.set(this, () => {
//       console.log('move', this);
//     });
//   }

//   draw() {
//     // console.log(_radius.get(this));
//     _move.get(this)();

//     console.log('draw');
//   }
// }

// const c = new Circle(1);
// c.draw();

// const _radius = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);
//   }

//   get radius() {
//     return _radius.get(this);
//   }

//   set radius(value) {
//     if (value <= 0) throw new Error('Invalid radius');
//     _radius.set(this, value);
//   }
// }

// const c = new Circle(1);
