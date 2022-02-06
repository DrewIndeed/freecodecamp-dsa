/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

// My solution
function diffArray(arr1, arr2) {
  const newArr = [];
  for (let a1item of arr1) {
    if (arr2.indexOf(a1item) === -1) newArr.push(a1item);
  }
  for (let a2item of arr2) {
    if (arr1.indexOf(a2item) === -1) newArr.push(a2item);
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]

// Way 2
function diffArray2(arr1, arr2) {
  return (
    arr1
      .concat(arr2)
      // if the item is included in arr1, it will check in arr2
      // if it is still true, it will be skipped
      // if not included in arr1, it will be skipped
      .filter((item) => !arr1.includes(item) || !arr2.includes(item))
  );
}

console.log(diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]

// Way 3
function diffArray3(arr1, arr2) {
  // check difference of arr1 comparing to arr2 and vice versa
  // and concatenate them
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter((item) => b.indexOf(item) === -1);
  }
}

console.log(diffArray3([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]
