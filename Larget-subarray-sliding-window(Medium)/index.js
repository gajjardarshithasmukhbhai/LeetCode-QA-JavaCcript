// below write the code through hashMap method

// approach
// In this version:

// obj is used instead of map, initialized as an empty object {}.
// obj[0] = 1; sets the initial value in obj corresponding to sum 0, just like map.set(0, 1);.
// result += obj[sum - k] || 0; retrieves the count from obj for the complement (sum - k) (or 0 if undefined), similarly to map.get(sum - k) || 0.
// obj[sum] = (obj[sum] || 0) + 1; updates the count in obj for the current sum, akin to map.set(sum, (map.get(sum) || 0) + 1);.
// This approach maintains the functionality of the original code while using a regular object instead of a Map, which might be more familiar or suitable depending on your preferences or environment constraints.
let values = [7, 1,7];
let k = 8;

const subarraySum = (nums, k) => {
    let obj = {}; // Using a plain object instead of Map
    let sum = 0;
    let result = 0;
    obj[0] = 1; 
    
    for (let n of nums) {
        sum = sum + n;
        result = result + obj[sum - k] || 0;
        obj[sum] = (obj[sum] || 0) + 1;
    }
    
    return result;
};

console.log(subarraySum(values, k)); 
