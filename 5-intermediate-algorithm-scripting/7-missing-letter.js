/* TESTS
fearNotLetter("abce") should return the string d.✅

fearNotLetter("abcdefghjklmno") should return the string i.✅

fearNotLetter("stvwx") should return the string u.✅

fearNotLetter("bcdf") should return the string e.✅

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.✅
*/

// My solution
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1)
      return String.fromCharCode(str.charCodeAt(i) - 1);
  }
  return undefined;
}

console.log(fearNotLetter('abce'));
console.log(fearNotLetter('abcdefghjklmno'));
console.log(fearNotLetter('stvwx'));
console.log(fearNotLetter('bcdf'));
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));
