// MEDIUM to HIGH Level => First Negative Number in every Window of Size K | Sliding Window

let arr = [12, 13, 17, 8, -15, 30, 16, 28];
let k = 3

function slidingWindowAlgo(values, windowSize) {
    let j = 0;
    let i = 0;
    let sum = 0;
    let negativeList = [];
    let result = [];
    while (j < values.length) {
        // if first number is Negative, so we add in the Negative List 
        if (values[j] < 0) {
            negativeList.push(values[j]);
        }
        // if J is reach to the window then 
        if (j - i + 1 === windowSize) {
            if (negativeList.length > 0) {
                result.push(negativeList[0]);
                if (negativeList[0] === values[i]) {
                    negativeList.shift();
                }
            }
            else {
                result.push(0);
            }
            i++;
        }
        j++;
    }
    return result;

}
console.log(slidingWindowAlgo(arr, k))

// cases:
// 1 first Negative Number
// 2 if first is not Negative Number
// special Edge case 3 where all positive number there, so in those cases we need to push => 0
// But condition is it obtain under window size