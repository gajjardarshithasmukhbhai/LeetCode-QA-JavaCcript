const banned = [1, 6, 5], n = 5, maxSum = 6;
const maxCount = (banned, n, maxSum) => {
    const sortTheBanned = banned.sort((a, b) => a - b);
    const remainingValues = [];
    // O(n)
    for (let i = 1; i <= n; i++) {
        if (!sortTheBanned.includes(i)) {
            remainingValues.push(i);
        }
    }
    // multiPointerApproach
    let start = 0;
    let end = remainingValues.length - 1;
    let count = 0;
    let sum = 0;
    console.log('remainingValues: ', remainingValues);
    while (start <= end) {
        if (sum + remainingValues[start] <= maxSum) {
            sum = sum + remainingValues[start];
            count++;
            start++;
        }
        else {
            end--;
        }
    }
    return count;
}
console.log(maxCount(banned, n, maxSum));