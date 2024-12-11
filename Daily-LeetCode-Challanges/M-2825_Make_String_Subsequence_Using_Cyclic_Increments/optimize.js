
var canMakeSubsequence = function (str1, str2) {
    let i = 0, j = 0;
    while (i < str1.length && j < str1.length) {
        if (str1[i] === str2[j] || String.fromCharCode((str1.charCodeAt(i) - 97 + 1) % 26 + 97) === str2[j]) {
            j++;
        }
        i++;
    }
    return j === str2.length;
};