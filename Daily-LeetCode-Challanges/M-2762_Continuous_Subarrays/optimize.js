const continuousSubarrays = (nums) => {
    let start = 0;
    let end = 0;
    let maxValue = nums[0];
    let minValue = nums[0];
    let result = 0;
    while (start < nums.length) {
        maxValue = Math.max(maxValue, nums[end]);
        minValue = Math.min(minValue, nums[end]);
        if (end < nums.length && Math.abs(maxValue - nums[end]) <= 2 && Math.abs(minValue - nums[end]) <= 2) {
            result += (end - start + 1);
            end++;
        }
        else {
            // shrink the array
            start++;
            if (start <= end) {
                maxValue = nums[start];
                minValue = nums[start];
                for (let i = start + 1; i <= end; i++) {
                    if (Math.abs(maxValue - nums[end]) <= 2 && Math.abs(minValue - nums[end]) <= 2) {
                        maxValue = Math.max(maxValue, nums[i]);
                        minValue = Math.min(minValue, nums[i]);
                    }
                }
            } else {
                end = start;
            }
        }
    }
    return result;
}
console.log(continuousSubarrays([5, 4, 2, 4]));