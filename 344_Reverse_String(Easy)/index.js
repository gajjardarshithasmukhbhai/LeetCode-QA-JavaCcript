// Two Pointer Approach used, to solved the Issue
// s=> ["h","e","l","l","0"]
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;
    let temp = 0;
    while (left < right) {
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
};