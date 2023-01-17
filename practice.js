// To do so, loop from 1 to 50 (inclusive). Each time through, if the number is evenly divisible by 3, say ‘fizz’. If the number is evenly divisible by 5, say ‘buzz’. If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. Otherwise, say the number.

// for (let i = 1; i < 51; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.

// For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.

// starting array
// let array = [1, 4, 11, 2, 37, -4];

// let smallest = array[0];
// let largest = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (smallest > array[i]) {
//     smallest = array[0];
//   } else if (largest < array[i]) {
//     largest = array[i];
//   }
// }

// let smallest = array[0];
// let largest = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (smallest > array[i]) {
//     smallest = array[i];
//   } else if (largest < array[i]) {
//     largest = array[i];
//   }
// }

// console.log(smallest, largest);

// Given the starting code of:

// x = 1
// y = 2
// Write a block of code that will print out the largest value.

// Using the given values as an example, your code should print out 2.

// To verify your code is working properly, try and change the values of x and y.

// As an additional challenge, print out The values are identical. if x and y have the same value.

let x = 2;
let y = 2;

if (x > y) {
  console.log(x);
} else if (y > x) {
  console.log(y);
} else {
  console.log("The values are identical");
}

// let x = 1;
// let y = 2;

// // Write your code below this line.

// if (x > y) {
//   console.log(x);
// } else {
//   console.log(y);
// }

// // Solution to additional challenge:

// if (x > y) {
//   console.log(x);
// } else if (y > x) {
//   console.log(y);
// } else {
//   console.log("The values are identical");
// }
