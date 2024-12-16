const nums = [1, 2];
const k = 3;
const multiplier = 4;

const getFinalState = (nums, k, multiplier) => {
    for (let i = 0; i < k; i++) {
        let minValue = Math.min(...nums);
        let minIndex = nums.indexOf(minValue);
        nums[minIndex] = minValue * multiplier;
    }
    return nums;
};
console.log(getFinalState(nums, k, multiplier));
