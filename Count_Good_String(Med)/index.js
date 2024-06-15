const s = "xyzzazabc";
const windowSize = 3;

const countGoodString = (string) => {
    let i = 0;
    let j = 0;
    let result = 0;
    let strCharCount = {};
    while (j < string.length) {
        if (j - i + 1 < 3) {
            strCharCount[string[j]] = (strCharCount[string[j]] || 0) + 1;
            j++;
        }
        else if (j - i + 1 === 3) {
            strCharCount[string[j]] = (strCharCount[string[j]] || 0) + 1;
            if (strCharCount[string[i]] === 1 && strCharCount[string[i + 1]] === 1 && strCharCount[string[j]] === 1) {
                result++;
            }
            strCharCount[string[i]]--;
            if (strCharCount[string[i]] == 0) {
                delete strCharCount[string[i]];
            }
            j++;
            i++;
        }
    }
    return result;
}
console.log(countGoodString(s));