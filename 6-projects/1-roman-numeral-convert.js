/*
! NOTICE: only numbers from 0 to 9999
*/

function convertToRoman(num) {
  // obj to lookup Roman value if available
  const romanLookup = {
    0: '', // ! need this to handle zero in num
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
  };

  // if num exists as a key in look up, return the Roman value immediately
  if (romanLookup[num]) return romanLookup[num];

  // array to transform digits value
  const digitTransform = [1000, 100, 10, 1];
  // convert num to string
  const toStr = num + '';
  // container after transforming num digits to Roman values
  let transformHolder = [];
  // starting index
  let idx = 0;

  if (num > 1000) {
    // if num is greater than, transform the first digit firstly and then the rest

    // ! transform the first digit firstly
    transformHolder.push('M'.repeat(parseInt(toStr.charAt(0))));

    idx = 1;
  }

  for (; idx < toStr.length; idx++) {
    transformHolder.push(
      romanLookup[
        parseInt(toStr.charAt(idx)) * // parseInt to get the digit position for calculation
          digitTransform.slice(digitTransform.length - toStr.length)[idx] // slice to get only the needed part of digitTransform
      ]
    );
  }

  // join them to string
  return transformHolder.join('');
}

// test logs
console.log(convertToRoman(0));
console.log(convertToRoman(36));
console.log(convertToRoman(366));
console.log(convertToRoman(3666));
console.log(convertToRoman(9999));

/* TESTS
convertToRoman(2) should return the string II.

convertToRoman(3) should return the string III.

convertToRoman(4) should return the string IV.

convertToRoman(5) should return the string V.

convertToRoman(9) should return the string IX.

convertToRoman(12) should return the string XII.

convertToRoman(16) should return the string XVI.

convertToRoman(29) should return the string XXIX.

convertToRoman(44) should return the string XLIV.

convertToRoman(45) should return the string XLV.

convertToRoman(68) should return the string LXVIII

convertToRoman(83) should return the string LXXXIII

convertToRoman(97) should return the string XCVII

convertToRoman(99) should return the string XCIX

convertToRoman(400) should return the string CD

convertToRoman(500) should return the string D

convertToRoman(501) should return the string DI

convertToRoman(649) should return the string DCXLIX

convertToRoman(798) should return the string DCCXCVIII

convertToRoman(891) should return the string DCCCXCI

convertToRoman(1000) should return the string M

convertToRoman(1004) should return the string MIV

convertToRoman(1006) should return the string MVI

convertToRoman(1023) should return the string MXXIII

convertToRoman(2014) should return the string MMXIV

convertToRoman(3999) should return the string MMMCMXCIX
*/
