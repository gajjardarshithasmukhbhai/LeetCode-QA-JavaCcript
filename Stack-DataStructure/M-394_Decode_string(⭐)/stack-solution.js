const s = "2[a3[c2[x]]y]";

const decodeString = function (s) {
    // Two Stack Needed

    // it carry the Char not Number
    let stringStack = [];

    // this stack carry the Number not the Char
    let numberStack = [];
    let currentNumber = 0;
    let currentString = "";

    for (let char of s) {
        if (!isNaN(char)) {
            currentNumber = currentNumber * 10 + char;
        }
        else if (char === "[") {
            stringStack.push(currentString);
            numberStack.push(currentNumber);
            currentNumber = 0;
            currentString = "";
        }
        else if (char === "]") {
            let previousString = stringStack.pop();
            let repeatedTimes = numberStack.pop();
            currentString = previousString + currentString.repeat(repeatedTimes);
        }
        else {
            currentString += char;
        }
    }
    return currentString;
};

console.log(decodeString(s)); // Should output: "accaccacc"
