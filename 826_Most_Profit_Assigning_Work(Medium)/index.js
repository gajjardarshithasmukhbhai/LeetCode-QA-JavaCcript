// Brut Force Approach
let difficulty = [13, 37, 58];
let profit = [4, 90, 96];
let worker = [34, 73, 45];

var maxProfitAssignment = function (difficulty, profit, worker) {
    let result = 0;
    for (let i = 0; i < worker.length; i++) {
        let maxValue = 0;
        for (let j = 0; j < difficulty.length; j++) {
            if (worker[i] >= difficulty[j]) {
                if (maxValue < profit[j]) {
                    maxValue = profit[j];
                }
            }
        }
        result = result + maxValue;
    }
    return result;
};
console.log(maxProfitAssignment(difficulty, profit, worker));

// Optimization Approach => with multi Pointer Approach::

// => Impact of Sorting on Code and Time Complexity
// Without Sorting:
// If you attempt to solve the problem without sorting,
// you'll likely end up with a brute-force approach. This would involve checking each worker's
// ability against each job's difficulty, which leads to a nested loop structure.

// Brute Force Approach (Without Sorting):
// Time Complexity:
// 𝑂(𝑚×𝑛) where 𝑚 m is the number of workers and n is the number of jobs.
// This is because for each worker, you would iterate through all jobs.
// Space Complexity:
// 𝑂(1) additional space, since you aren't using any extra data structures apart from basic variables for tracking results.

let difficulty = [13, 37, 58];
let profit = [4, 90, 96];
let worker = [34, 73, 45];

var maxProfitAssignment = function (difficulty, profit, worker) {
    worker.sort((a, b) => a - b);
    difficulty = difficulty.map((value, index) => ({ value, index }));
    difficulty.sort((a, b) => a.value - b.value);
    let maxProfit = 0, prevIndex = 0, max = 0;
    worker.forEach(ability => {
        for (let i = prevIndex; i < difficulty.length && ability >= difficulty[i]["value"]; i++) {
            prevIndex++;
            max = Math.max(max, profit[difficulty[i]["index"]]);
        }
        maxProfit += max;
    });
    return maxProfit;
};
console.log(maxProfitAssignment(difficulty, profit, worker));