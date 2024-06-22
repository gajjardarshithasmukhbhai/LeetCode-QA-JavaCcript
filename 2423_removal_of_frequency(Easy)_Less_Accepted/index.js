// PS:
// You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

// Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

// Note:

// - The frequency of a letter x is the number of times it occurs in the string.
// - You must remove exactly one letter and cannot choose to do nothing.

// Example 1:

// Input: word = "abcc"
// Output: true
// Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.

// My Solution:

// Approach
// - get the frequncy of easy char
// - then decrement the char and check either equal or not. using getting all value of object keys and it's same or not
// - then restoring method, so if  anyChar count become less we increment and try to restore 

/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    const stringCount = {};
  let repeatedCount = 0;

  // Count the frequency of each character in the word
  for (let i = 0; i < word.length; i++) {
      stringCount[word[i]] = (stringCount[word[i]] || 0) + 1;
  }

  // Helper function to check if all values in an object are the same
  const allValuesEqual = (obj) => {
      const values = Object.values(obj);
      const firstValue = values[0];
      return values.every(v => v === firstValue);
  };

  // Try removing one character at a time and check frequencies
  for (let key in stringCount) {
      if (stringCount[key] > 0) {
          stringCount[key]--;
          if (stringCount[key] === 0) {
              delete stringCount[key];
          }

          if (allValuesEqual(stringCount)) {
              return true;
          }
          // Restore the original frequency count
          stringCount[key]++;
      }
  }

  return false;
};