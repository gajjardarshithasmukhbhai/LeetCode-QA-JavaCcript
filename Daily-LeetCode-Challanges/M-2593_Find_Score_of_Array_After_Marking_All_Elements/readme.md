# Find Score Algorithm

This algorithm calculates the "score" of a given array based on specific rules. The score is the sum of selected numbers from the array, where adjacent indices cannot both be included in the result.

## Problem Description

Given an array of numbers, the goal is to:

1. Sort the elements of the array by their values.
2. Process the elements in sorted order.
3. Add the value of the current element to the score if its index (and its adjacent indices) have not already been visited.
4. Mark the index of the selected element and its adjacent indices as visited.
5. Return the total score.

---

## Code Implementation

### JavaScript Function

```javascript
const findScore = (nums) => {
  const adjacentNumsIndex = [];
  let result = 0;

  // Prepare an array of pairs [value, index]
  for (let i = 0; i < nums.length; i++) {
    adjacentNumsIndex[i] = [nums[i], i];
  }

  // Sort the array by value
  adjacentNumsIndex.sort((a, b) => a[0] - b[0]);

  // Create a visited array to track which indices have been processed
  const visitedIndex = Array(nums.length).fill(false);

  for (let i = 0; i < adjacentNumsIndex.length; i++) {
    const originalIndex = adjacentNumsIndex[i][1]; // Get the original index of the sorted element

    // If this index has already been visited, skip it
    if (visitedIndex[originalIndex]) {
      continue;
    }

    // Add the value of the current element to the result
    result += adjacentNumsIndex[i][0];

    // Mark the current index as visited
    visitedIndex[originalIndex] = true;

    // Mark adjacent elements as visited
    if (originalIndex - 1 >= 0) {
      visitedIndex[originalIndex - 1] = true; // Mark previous element
    }
    if (originalIndex + 1 < nums.length) {
      visitedIndex[originalIndex + 1] = true; // Mark next element
    }
  }

  return result;
};
```

## Approach Explanation

---

1. Preparation Step:

- Convert the array into an array of pairs [value, index], where each pair represents the value and its original position in the input array.

2. Sorting:

- Sort the array of pairs based on the value in ascending order. This ensures that we process elements starting from the smallest value.

3. Visited Array:

- Create a boolean array, visitedIndex, of the same length as the input array to keep track of which indices have already been processed or marked as adjacent to a processed index.

4. Iterative Processing:

- For each element in the sorted array:
  - Skip the element if its index is already marked as visited.
  - Otherwise:
    - Add the value of the element to the result.
    - Mark the index of the element as visited.
    - Mark the adjacent indices (index - 1 and index + 1) as visited if they are within bounds.

6. Result:

Return the accumulated result as the score.

### Example Walkthrough

Input

```javascript
Copy code
nums = [2, 1, 3, 4, 5, 2];
```

Execution Steps
Initial Preparation:

```javascript
Copy code
adjacentNumsIndex = [
    [2, 0], [1, 1], [3, 2], [4, 3], [5, 4], [2, 5]
];
```

- Sorting:

```javascript
Copy code
adjacentNumsIndex = [
    [1, 1], [2, 0], [2, 5], [3, 2], [4, 3], [5, 4]
];
```

Processing:

- Pick [1, 1]: Add 1 to result, mark indices 1, 0, and 2 as visited.
- Skip [2, 0] (already visited).
- Skip [2, 5] (adjacent to previously visited).
- Pick [3, 2]: Add 3 to result, mark indices 2, 1, and 3 as visited.
- Skip [4, 3] (already visited).
- Pick [5, 4]: Add 5 to result, mark indices 4 and 3 as visited.
