/*
Flatten a nested array. You must account for varying levels of nesting.
*/

/* TESTS
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"]. ✅

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]. ✅

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].✅

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]. ✅

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods. ✅
*/

// My solution
function steamrollArray(arr) {
  // temp container to store inner arrays' content until there is no array in arr anymore
  let temp = [];

  // while there is one item of arr is an array
  while (arr.some((item) => Array.isArray(item))) {
    // loop through arr
    for (let element of arr) {
      // if element is not an array -> add element to temp
      if (!Array.isArray(element)) {
        temp.push(element);
      } else {
        // else, add concat content of that element to temp
        // this would help to flat arr gradually over iteration
        temp.push(...element);
      }
    }

    // set the content of arr as temp, because temp is now 1-level fatten
    arr = [...temp];

    // empty temp to reset the process
    temp = [];
  }

  // return the flatten version of arr
  return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[['a']], [['b']]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));

// Way 2: using recursion
function steamrollArray2(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log();
console.log(steamrollArray2([1, [2], [3, [[4]]]]));
console.log(steamrollArray2([[['a']], [['b']]]));
console.log(steamrollArray2([1, [], [3, [[4]]]]));
console.log(steamrollArray2([1, {}, [3, [[4]]]]));
