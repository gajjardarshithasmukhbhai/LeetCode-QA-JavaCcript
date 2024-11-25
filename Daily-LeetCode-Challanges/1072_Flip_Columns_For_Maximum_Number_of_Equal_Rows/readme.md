# LeetCode 1072 - Flip Columns For Maximum Number of Equal Rows

## Problem Description

You are given an `m x n` binary matrix `matrix`. You can choose any number of columns in the matrix and flip every cell in that column (i.e., change the value of the cell from `0` to `1` or from `1` to `0`).

Return the maximum number of rows that have all values equal after some number of flips.

### Example 1:

**Input:**
matrix = [[0,1,0],[1,0,1],[0,1,0]]

**Output:**
**Explanation of BrutForce Approach:**

- **Iteration 1:** Use Row 0 ([0, 1, 0]) as the Template
  The goal is to determine how many rows can be made identical to [0, 1, 0] after flipping columns.

- Compare the "template row" with each row in the matrix:

- Row 0 ([0, 1, 0]): Already identical, so count it.
- Row 1 ([1, 0, 1]): Compare element by element:
  To make this row identical to the template, column 0 must flip (1 -> 0), column 1 must flip (0 -> 1), and column 2 must flip (1 -> 0).
  If we apply these flips, Row 1 becomes [0, 1, 0], so count it.
- Row 2 ([0, 1, 0]): Already identical, so count it.
  Total rows matching the template [0, 1, 0]: 3.

- **Iteration 2:** Use Row 1 ([1, 0, 1]) as the Template
  Now, treat Row 1 as the template and compare it with all rows:

- Row 0 ([0, 1, 0]): Compare element by element:
  Column 0 must flip (0 -> 1), column 1 must flip (1 -> 0), and column 2 must flip (0 -> 1).
- After these flips, Row 0 becomes [1, 0, 1], so count it.
- Row 1 ([1, 0, 1]): Already identical, so count it.
- Row 2 ([0, 1, 0]): Same as Row 0. After the same flips, it becomes [1, 0, 1], so count it. Total rows matching the template [1, 0, 1]: 3.

- **Iteration 3:** Use Row 2 ([0, 1, 0]) as the Template
  This is identical to the first iteration because Row 2 is identical to Row 0.
  Total rows matching the template [0, 1, 0]: 3.

**Explanation of Optimization Approach:**

### Concepts Comes:

**Normalization Of Values:**

```js
const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [1, 1, 1],
];
```

so in normalization we are going with the one by one row:

- **Row 1: [0, 1, 0]**

- Direct form: "010" (as-is).
- Flipped form: "101" (flipping 0 ↔ 1).
- Choose the smaller: "010" is smaller than "101".
- Normalized form: "010".
- NOTE: Normalization means nothing but Smaller value, in above case 010 -> smaller tha the 101. so for that we need to check ample to ample
  ex. 0(010) -> smaller than 1(101). so we compare from left to right.so simply say direct and flipped compare with this term
