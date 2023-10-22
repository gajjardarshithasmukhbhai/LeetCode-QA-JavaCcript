// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.



// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]


// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

// ::Solution::

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {

    // If something is not there so we need to return
    if (nums.length < 4) return [];
    // step:1 Sort the Array and proceed
    nums.sort((a, b) => a - b);

    const res = [];

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; ++j) {
            let k = j + 1;
            let l = nums.length - 1;

            while (k < l) {
                let sums = nums[i] + nums[j] + nums[k] + nums[l];

                if (sums === target) {
                    res.push([nums[i], nums[j], nums[k], nums[l]]);
                    while (nums[k] === nums[k + 1]) k++;
                    while (nums[l] === nums[l - 1]) l--;
                    k++;
                }
                // If sums is greater than the target, that means we need to decrement value from L. Because L -----> Bigger value than the Initial values
                else if (sums > target) {
                    l--;
                }
                // If sums < target that mean, we need to increment the value to achieve desired value 
                else {
                    k++
                }
            }
            // Below step I tried to eliminate the Repeated Value through while loop
            while (nums[j] === nums[j + 1]) j++;
        }
        // Below value I tried to eliminate to repeated value of I
        while (nums[i] === nums[i + 1]) i++;
    }
    return res;
}