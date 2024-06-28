//JSDoc

/**
 * This function returns true if the given
 * word is a palindrome, and false if it is
 * not.
 * @param {string} word
 */

function isPalindrome(word) {
  // use a while loop
  let start = 0;
  let end = word.length - 1;
  while (start < end) {
    // do something
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
console.log(isPalindrome("racecar"));

/**
 * Define a function that, given an array,
 * reverse that order of the items in that array
 * in-place, returning that same array.
 * @param {any[]} arr
 */

function reverseArr(arr) {
  // your code here

  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
}
