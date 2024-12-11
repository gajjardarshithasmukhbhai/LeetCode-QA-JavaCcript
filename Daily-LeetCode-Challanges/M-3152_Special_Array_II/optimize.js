const nums = [4, 3, 1, 6];
const queries = [[0, 2], [2, 3]];

const isArraySpecial = (nums, queries) => {
    const totalNums = nums.length;
    const cummulativeSum = Array(totalNums).fill(0);
    const result = [];

    for (let i = 1; i < totalNums; i++) {
        cummulativeSum[i] = cummulativeSum[i - 1];
        if ((nums[i - 1] % 2 === 0 && nums[i] % 2 === 0) || (nums[i - 1] % 2 !== 0 && nums[i] % 2 !== 0)) {
            cummulativeSum[i]++;
        }
    }

    for (let i = 0; i < queries.length; i++) {
        const [start, end] = queries[i];
        if (cummulativeSum[end] - cummulativeSum[start] === 0) {
            result.push(true);
        }
        else {
            result.push(false);
        }
    }
    return result;
}

console.log(isArraySpecial(nums, queries));