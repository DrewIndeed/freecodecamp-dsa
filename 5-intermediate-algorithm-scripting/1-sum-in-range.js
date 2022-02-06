// Way 1
function sumAll1(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) sum += i;
  return sum;
}

// Way 2
function sumAll2(arr) {
  const startNum = arr[0];
  const endNum = arr[1];

  // calculate number of numbers between start and end
  // here is the formula
  const numCount = Math.abs(startNum - endNum) + 1;

  // Arithmetic Progression summing formula
  return ((startNum + endNum) * numCount) / 2;
}

// tests
console.log(sumAll1([1, 4]));
console.log(sumAll1([4, 1]));
console.log(sumAll2([5, 10]));
console.log(sumAll2([10, 5]));
