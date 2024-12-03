// with  slice approach and beats 100% peoples
/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    const finalResult = [];
    let startingIndex = 0;
    for (let i = 0; i <= spaces.length; i++) {
        finalResult.push(s.slice(startingIndex, spaces[i]));
        startingIndex = spaces[i];
    }
    return finalResult.join(' ');
};

// multi pointer approach w/c slice approach
const s = "icodeinpython";
const spaces = [1, 5, 7, 9];
const addSpaces = (s, spaces) => {
    let result = "";
    let startIndex = 0;

    for (let i = 0; i < s.length; i++) {
        if (i === spaces[startIndex]) {
            result += " ";
            startIndex++;
        }
        result += s[i];
    }
    return result;
}
console.log(addSpaces(s, spaces));