// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
/* TESTS
spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.

spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.

spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.

spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.

spinalCase("AllThe-small Things") should return the string all-the-small-things.
*/

// START OF: My Solution
function spinalCase(str) {
  console.log('CASE OF: ' + str);
  // split by special characters
  let toWordsBySplit = str.split(/\W+|_/);
  let rs = [];

  for (let word of toWordsBySplit) {
    if (countUpperLetter(word) > 1) {
      let handledCombined = handleCombinedWords(word);
      handledCombined.map((item) => rs.push(item));
    } else {
      rs.push(word.toLowerCase());
    }
  }

  return rs.join('-');
}

function countUpperLetter(word) {
  return word.split('').filter((letter) => /[A-Z]/.test(letter)).length;
}

function handleCombinedWords(combinedWord) {
  let rs = [];
  let temp = [];
  for (let i = 0; i < combinedWord.length; i++) {
    if (
      /[A-Z]/.test(combinedWord.charAt(i)) &&
      /[a-z]/.test(combinedWord.charAt(i - 1))
    ) {
      rs.push(temp.join(''));
      temp = [];
    }

    temp.push(combinedWord.charAt(i));

    if (i === combinedWord.length - 1 && temp.length > 0)
      rs.push(temp.join(''));
  }
  return rs.map((item) => item.toLowerCase());
}

console.log(spinalCase('This Is Spinal Tap') + '\n');
console.log(spinalCase('thisIsSpinalTap') + '\n');
console.log(spinalCase('The_Andy_Griffith_Show') + '\n');
console.log(spinalCase('Teletubbies say Eh-oh') + '\n');
console.log(spinalCase('AllThe-small Things') + '\n');
// END OF: My Solution
