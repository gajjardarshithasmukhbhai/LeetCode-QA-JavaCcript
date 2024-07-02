// This Problem,we can solved throgh various ALGORITHM like sliding window, hasMap and Binary Search

// 1. Sliding Window
let nums1 = [1, 1, 2, 2, 3];
let nums2 = [2, 3];

const intersect = (num1, num2) => {
    num1.sort((a, b) => a - b);
    num2.sort((a, b) => a - b);

    let left = 0;
    let first = 0;

    let result = [];
    while (left < num1.length && first < num2.length) {
        if (nums1[left] === num2[first]) {
            result.push(num1[left]);
            first++;
            left++;
        }
        if (num1[left] < num2[first]) {
            left++;
        }
        else if (num1[left] > num2[first]) {
            first++;
        }
    }
    return result;
}
console.log(intersect(nums1, nums2));

// Note: Sorting Algorithm Takes, O(nlogn) => Time
// So Time-Complexiety will be become => O(nlogn)


// 2. HashMap Algorithm used

/* eslint-disable @typescript-eslint/no-unused-vars */
let nums1 = [1, 1, 2, 2, 3];
let nums2 = [2, 3];
//
const intersect = (num1, num2) => {
    const countMap = new Map();
    const result = [];
    for (let num of nums1) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    for (let numValue of num2) {
        if (countMap.has(numValue) && countMap.get(numValue) > 0) {
            result.push(numValue);
            countMap.set(numValue, countMap.get(numValue) - 1);
        }
    }
    return result;
}
console.log(intersect(nums1, nums2));

// Note: Through this approach,we reduce the so much time-complexiety and ahead of 99.97%