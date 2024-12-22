const topKFrequent = (nums, k) => {
    let hashValue = new Map();
    let result = [];
    // this take the time-complexity O(n)
    for (let value of nums) {
        hashValue.set(value, hashValue.get(value) + 1 || 1);
    }

    // this sorting will take the O(nlogn)
    hashValue = [...hashValue.entries()].sort((a, b) => b[1] - a[1]);

    let counter = 0;

    // this will take K time complexity because we break the Loop when both are equal
    for (let [key,] of hashValue) {
        if (counter !== k) {
            result.push(key);
        }
        else {
            break;
        }
        counter++;
    }
    return result;
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

// so total Time Complexity will be O(nlogn)
// NOTE: But we need to Optimized the Time Complexity more 