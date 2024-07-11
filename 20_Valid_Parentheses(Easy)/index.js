/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const allSymbools = s.split('');
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')','}',']'];
    const stackOfBrackets = [];
    for(let i = 0;i< allSymbools.length;++i) {
        if(openBrackets.includes(allSymbools[i])) {
            stackOfBrackets.push(allSymbools[i]);
        }
        else if(closeBrackets.includes(allSymbools[i])) {
            let removedLastElement = stackOfBrackets.pop();
            let removedCloseElementIndex = openBrackets[closeBrackets.indexOf(allSymbools[i])];
            if(removedLastElement !== removedCloseElementIndex) {
                return false;
            }   
        }
    }
    return stackOfBrackets.length === 0;
};