// import { Circle } from './circle.js';

// const c = new Circle(10);
// c.draw();

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// }

// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target));

var addTwoNumbers = function (l1, l2) {
  // Create string to concat int in list
  let list1 = "";
  for (let i = l1.length - 1; i >= 0; i--) {
    list1 += l1[i];
  }

  let list2 = "";
  for (let i = l2.length - 1; i >= 0; i--) {
    list2 += l2[i];
  }

  const sum = parseInt(list1) + parseInt(list2);
  const strArr = sum.toString().split("").reverse();

  let intArr = [];
  for (i = 0; i < strArr.length; i++) intArr.push(parseInt(strArr[i]));
  return intArr;
};

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

console.log(addTwoNumbers(l1, l2));

// console.log(addTwoNumbers([l1]));

// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
