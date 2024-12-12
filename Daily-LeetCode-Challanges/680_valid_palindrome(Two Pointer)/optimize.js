
const isPalindrome = (str, left, right) => {
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
const validPalindrome = (s) => {
    if (s === s.split('').reverse().join('')) return true;
    else {
        let i = 0;
        let j = s.length - 1;
        while (i < j) {
            if (s[i] !== s[j]) {
                return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
            }
            i++;
            j--
        }
    }
};
console.log(validPalindrome("abca"));