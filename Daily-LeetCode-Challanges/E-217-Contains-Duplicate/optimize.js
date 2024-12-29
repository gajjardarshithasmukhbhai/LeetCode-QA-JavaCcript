const nums = [2, 3, 1]
const containsDuplicate = (nums) => {
    let freqCount = new Map();
    let repeatedNum = 0;
    for (let value of nums) {
        freqCount.set(value, (freqCount.get(value) || 0) + 1);
        if (Math.max(repeatedNum, freqCount.get(value)) > 1) {
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate(nums));