function confirmEnding(str, target) {
  let targetlen = target.length;
  let strlen = str.length;
  let substrAfterComparing = str.substring(strlen - targetlen, strlen);
  // console.log(substrAfterComparing);
  return substrAfterComparing === target;
}

console.log(confirmEnding('Open sesame', 'same'));
console.log(confirmEnding('Open sesame', 'sage'));
console.log(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  )
);
console.log(confirmEnding('Bastian', 'n'));
