/***********************************************************************
Write a function arrowReverseString(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:
let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"


***********************************************************************/

// your code here!
// let arrowReverseString = (str) => {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     let char = str[i];
//     reversed += char;
//   }
//   return reversed;
// }
let arrowReverseStringWithArr = (str) => {
  let strArr = str.split('').reverse();
  return strArr.join('');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/

try {
  module.exports = arrowReverseStringWithArr;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
