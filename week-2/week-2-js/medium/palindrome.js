/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const input = str.replace(/[\s,!.?]/g,'').toLowerCase();
  const reversedInput = input.split('').reverse().join('')
  return input === reversedInput
}

// const result = isPalindrome("Able, was I ere I saw Elba!");
// console.log(result);


//  or use .reverse() to reverse the array -> join   and then check for Equality
module.exports = isPalindrome;
