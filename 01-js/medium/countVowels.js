/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let str = str.toLower();
  let vowelCount = 0;
  let strArray = str.split("");

  strArray.array.forEach(element => {
    if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u") {
      vowelCount++;
    }

  });

  return vowelCount;

}

module.exports = countVowels;