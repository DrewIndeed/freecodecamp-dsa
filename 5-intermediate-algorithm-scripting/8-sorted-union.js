/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

/* TESTS
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].

uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
*/

// My solution
function uniteUnique(...arrays) {
  let rs = [];
  for (let arr of arrays) {
    let temp = [];
    for (let item of arr) if (!temp.includes(item)) temp.push(item);
    temp = temp.filter((item) => !rs.includes(item));
    rs = [...rs, ...temp];
  }
  return rs;
}

// Way 2
function uniteUnique2(...arr) {
  return [...new Set(arr.flat())];
}

// Or as an arrow function
const uniteUnique3 = (...arr) => [...new Set(arr.flat())];


console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique2([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique3([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));