/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

IN SHORT: find the least common multiple of multiple number in a given range

https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
https://en.wikipedia.org/wiki/Greatest_common_divisor
*/

/* TESTS
smallestCommons([1, 5]) should return a number.

smallestCommons([1, 5]) should return 60.

smallestCommons([5, 1]) should return 60.

smallestCommons([2, 10]) should return 2520.

smallestCommons([1, 13]) should return 360360.

smallestCommons([23, 18]) should return 6056820.
*/

function smallestCommons(arr) {
  // sort the array of 2 limits in ascending order and destruct 2 limits
  const [min, max] = arr.sort((a, b) => a - b);

  // ! range: create an array of numbers from lower limit to upper limit
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, index) => index + min);

  // function to find the greatest common divisor of 2 numbers (using RECURSION)
  // formula from Wikipedia
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // function to find the lowest common multiple of 2 numbers
  // formula from Wikipedia
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // reduce to find the lowest common divisor of MULTIPLE numbers
  return range.reduce((multiple, current) => lcm(multiple, current));
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([23, 18]));
