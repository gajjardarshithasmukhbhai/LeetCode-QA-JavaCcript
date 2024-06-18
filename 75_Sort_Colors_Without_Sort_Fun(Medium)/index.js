// Through BrutForce Approach 
// PS: 75. Sort Colors

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let temp = 0;
    let result = nums;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (result[i] > result[j]) {
                temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    return result;
};
// TS: O(n^2)