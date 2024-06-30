// Brut Force Approach, is simple for this

/* eslint-disable @typescript-eslint/no-unused-vars */
let nums = [10, 1, 2, 4, 7, 2];
let limit = 5;
var longestSubarray = function (nums, limit) {
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        let min = nums[i];
        let max = nums[i];
        for (let j = i; j < nums.length; j++) {
            if (nums[j] < min) {
                min = nums[j];
            }
            if (nums[j] > max) {
                max = nums[j];
            }
            if (max - min <= limit) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }
    return maxLength;
};
console.log(longestSubarray(nums, limit));


// Vaiable sliding window Approach
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
    let i = 0;
    let j = 0;
    let minqueue = []; // In minQueue goes from increasing order
    let maxqueue = []; // In maxQueue goes decreasing order
    let maxLength = 0;
    while (j < nums.length) {
        while (maxqueue.length > 0 && nums[j] > maxqueue[maxqueue.length - 1]) {
            maxqueue.pop();
        }
        maxqueue.push(nums[j]);
        while (minqueue.length > 0 && nums[j] < minqueue[minqueue.length - 1]) {
            minqueue.pop();
        }
        minqueue.push(nums[j]);
        // main logic
        while (maxqueue[0] - minqueue[0] > limit) {
            if (nums[i] === maxqueue[0]) {
                maxqueue.shift();
            }
            if (nums[i] === minqueue[0]) {
                minqueue.shift();
            }
            i++;
        }
        maxLength = Math.max(maxLength, j - i + 1);
        j++;
    }
    return maxLength;
};

// Note: 41 to 28 become same if value need min,max or only max longestSubarray. but after code Where logic is started
// nums[i] work like pointer and we used that to make our i => i++ increase so that, we got the window frame

// This is Variable Sliding Algorithm
// Chat Link: https://chatgpt.com/share/8df5983c-fe6b-480e-884e-68edc2ab01e6