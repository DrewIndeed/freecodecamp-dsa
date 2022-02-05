// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line

  // Way 1: using for loop
  for (let i = 0; i < this.length; i++) newArray.push(callback(this[i]));

  // Way 2: using for each
  // this.forEach(a => newArray.push(callback(a)));

  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function (item) {
  return item * 2;
});

console.log(new_s);
