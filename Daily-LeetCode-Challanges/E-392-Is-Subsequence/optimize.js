/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    const myValues = t.split('');
    let result = true;
    let charCount = -1;
    for (let value of s) {
        let currentIndex = myValues.indexOf(value, charCount + 1);
        if (currentIndex === -1) {
            result = false;
            break;
        }
        charCount = currentIndex;
    }
    return result;
};