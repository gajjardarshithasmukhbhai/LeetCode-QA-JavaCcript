/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Note: Below is Brutforce approach, Need to Implement the [[STACK]]
const nextGreaterElement = (num1, num2) => {
    const result = [];
    console.log('num1: ', num1.length);
    for (let i = 0; i < num1.length; i++) {
        let index = num2.indexOf(num1[i]);
        let found = false;
        while (index < num2.length) {
            if (num1[i] < num2[index]) {
                result.push(num2[index]);
                found = true;
                break;
            }
            index++;
        }
        if(!found) {
            result.push(-1);
        }
    }
    return result;
}

// Implement Stack to minimize the Time Complexiety