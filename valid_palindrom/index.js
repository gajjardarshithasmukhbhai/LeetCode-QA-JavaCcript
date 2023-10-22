// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// ::Solution::

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (!s.length) return true;
    let removeNonAlphabeticChar = s.replace(/[^0-9a-z]/gi, '').toLocaleLowerCase();
    let convertInArray = removeNonAlphabeticChar.split('');
    let reverseArray = [];
    for (let i = convertInArray.length - 1; i >= 0; i--) {
        reverseArray.push(convertInArray[i]);
    }
    return reverseArray.join('') === removeNonAlphabeticChar;
};