var isArraySpecial = function (nums, queries) {
    const n = nums.length;
    const prefix = Array(n).fill(0);  // Initialize prefix array

    // Build the prefix array to count special pairs
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1];
        if ((nums[i - 1] % 2 === 0 && nums[i] % 2 === 0) ||
            (nums[i - 1] % 2 !== 0 && nums[i] % 2 !== 0)) {
            prefix[i]++;
        }
    }

    const result = [];

    // Process each query
    for (let i = 0; i < queries.length; i++) {
        const [left, right] = queries[i];
        const specialCount = prefix[right] - (left > 0 ? prefix[left] : 0);
        result.push(specialCount === 0);
    }

    return result;
};