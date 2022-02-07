/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
*/

/* HELPFUL SOURCES
https://stackoverflow.com/questions/28228435/how-does-this-regexp-split-on-the-first-vowel
*/

// My solution
function translatePigLatin(str) {
  if (/[ueoai]/i.test(str.charAt(0))) console.log(str + 'way');
  else if (!/[ueoai]/gi.test(str)) console.log(str + 'ay');
  else {
    let splitting = str.split(/([ueoai].*)/i);
    console.log(splitting[1] + splitting[0] + 'ay');
  }
}

translatePigLatin('algorithm');
translatePigLatin('eight');

translatePigLatin('california');
translatePigLatin('consonant');
translatePigLatin('paragraphs');
translatePigLatin('glove');
translatePigLatin('schwartz');
translatePigLatin('rhythm');

/* TESTS
translatePigLatin("california") should return the string aliforniacay. ✅

translatePigLatin("paragraphs") should return the string aragraphspay.✅

translatePigLatin("glove") should return the string oveglay. ✅

translatePigLatin("algorithm") should return the string algorithmway. ✅

translatePigLatin("eight") should return the string eightway. ✅

Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway. ✅

Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay. ✅
*/

// Way 2
function translatePigLatin2(str) {
  return str
    .replace(/^[aeiou]\w*/, '$&way')
    .replace(/(^[^aeiou]+)(\w*)/, '$2$1ay');
}

console.log();
console.log(translatePigLatin2('algorithm'));
console.log(translatePigLatin2('eight'));

console.log(translatePigLatin2('california'));
console.log(translatePigLatin2('consonant'));
console.log(translatePigLatin2('paragraphs'));
console.log(translatePigLatin2('glove'));
console.log(translatePigLatin2('schwartz'));
console.log(translatePigLatin2('rhythm'));
