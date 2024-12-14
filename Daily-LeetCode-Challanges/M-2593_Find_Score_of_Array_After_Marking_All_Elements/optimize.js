const findScore = (nums) => {
    const adjacentNumsIndex = [];
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        adjacentNumsIndex[i] = [nums[i], i];
    }
    adjacentNumsIndex.sort((a, b) => a[0] - b[0]);
    console.log(adjacentNumsIndex);

    const visitedIndex = Array(nums.length).fill(false);
    for (let i = 0; i < adjacentNumsIndex.length; i++) {
        let originalIndex = adjacentNumsIndex[i][1];
        if (visitedIndex[originalIndex] == true) {
            continue;
        }
        result += adjacentNumsIndex[i][0];

        visitedIndex[originalIndex] = true;

        if (originalIndex + 1 < nums.length) {
            visitedIndex[originalIndex + 1] = true;
        }
        if (originalIndex - 1 >= 0) {
            visitedIndex[originalIndex - 1] = true;
        }
    }
    return result;
};
console.log(findScore([2, 1, 3, 4, 5, 2]))