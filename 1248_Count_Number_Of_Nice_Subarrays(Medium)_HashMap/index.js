// BrutForce Approach, havn't created the new array and handling length. we need the count
// so doing the same
let nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2];
let k = 2;

const numberOfSubarrays = (nums, k) => {
    let resultCount = 0;
    for (let i = 0; i < nums.length; i++) {
        let oddCount = 0;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] % 2 !== 0) {
                oddCount++;
            }
            if (oddCount === k) {
                resultCount++;
            }
            if (oddCount > k) {
                break;
            }
        }
    }
    return resultCount;
}

console.log(numberOfSubarrays(nums, k)); // Expected output: 2
// ===================================================================== //
const numberOfSubarrays = (nums, k) => {
    let oddCount = 0;
    let resultCount = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[j] % 2 !== 0) {
                oddCount++;
            }
            else if (oddCount === k) {
                resultCount++;
                break;
            }
        }
    }
    return resultCount;
}


// we used HashMap algorithm, so basically to minimize the complexiety Because we solved through, 
// continue- BrutForce but it takes O(n^2) => but through hashMap already created the obj, so we need to,
// pass or increment value of that number
let nums = [1, 1, 2, 1, 1];
let k = 3;
const numberOfSubarrays = (nums, k) => {
    let oddCount = 0;
    let resultCount = 0;
    let dataSetValue = new Map();
    dataSetValue.set(0, 1);
    for (let value of nums) {
        if (value % 2 !== 0) {
            oddCount++;
        }
        if (dataSetValue.has(oddCount - k)) {
            resultCount = resultCount + dataSetValue.get(oddCount - k)
        }
        dataSetValue.set(oddCount, (dataSetValue.get(oddCount) || 0) + 1);
    }
    return resultCount;
}
console.log(numberOfSubarrays(nums, 3));