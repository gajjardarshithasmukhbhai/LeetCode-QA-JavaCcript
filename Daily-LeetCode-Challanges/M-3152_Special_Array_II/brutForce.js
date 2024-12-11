// Approach here I consider the 0,2,4,6,8

// in oddEvenOdd Scenario
// in 0 position => value should be Odd,
// and 1 position => value should be Even,
// and 2 position => value should be Odd

// in EvenOddEven Scenario
// in 0 Position => value should be Even
// in 1 Position => value should be Odd
// in 2 position => value should be Even

const nums = [3, 4, 1, 2, 6];
const queries = [[0, 4]];

const isArraySpecial = (nums, queries) => {
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let isOddEvenOdd = true;
        let isEvenOddEven = true;
        const [start, end] = queries[i];

        for (let j = start; j <= end; j++) {
            const position = start - j;

            // oddEvenOdd
            if (position % 2 === 0 && nums[j] % 2 === 0) {
                isOddEvenOdd = false;
            }
            else if (position % 2 !== 0 && nums[j] % 2 !== 0) {
                isOddEvenOdd = false;
            }

            // evenOddEven
            if (position % 2 === 0 && nums[j] % 2 !== 0) {
                isEvenOddEven = false;
            }
            else if (position % 2 !== 0 && nums[j] % 2 == 0) {
                isEvenOddEven = false;
            }

        }
        result.push(isEvenOddEven || isOddEvenOdd);
    }
    return result;
};
console.log(isArraySpecial(nums, queries));