/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

// My solution
function destroyer(arr, ...args) {
  let refArr = arr;
  for (let ag of args) {
    let temp = [];
    for (let item of refArr) {
      if (item === ag) continue;
      temp.push(item);
    }
    refArr = [...temp];
  }
  return refArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Way 2
function destroyer(arr, ...valsToRemove) {
  // filter the items that ARE NOT in the args array
  return arr.filter(elem => !valsToRemove.includes(elem));
}