## Math Formula Based

# Task Scheduler Formula Explanation

This README provides an in-depth understanding of the formula used to calculate the minimum time required to execute tasks with a cooldown period in the **Task Scheduler** problem.

---

## Problem Overview

You are given a list of tasks (e.g., `['A', 'A', 'B', 'B', 'C']`) and a cooldown period `n`. The same task must be executed at least `n` units of time apart. The goal is to determine the **minimum number of time units** required to execute all tasks while adhering to the cooldown constraints.

---

## Formula

The formula used to calculate the minimum time is:

```javascript
Math.max(tasks.length, (max - 1) * (n + 1) + maxCount);
```

### Key Terms:

- **`tasks.length`**: The total number of tasks.
- **`max`**: The maximum frequency of any task (the most repeated task).
- **`n`**: The cooldown period between two consecutive executions of the same task.
- **`maxCount`**: The number of tasks that share the maximum frequency.

---

## Why the Formula Works

### 1. `(max - 1) * (n + 1)`

This term calculates the **ideal number of slots** required to schedule the most frequent task with the required idle time:

- **`max - 1`**: Excludes the last occurrence of the most frequent task because it does not require additional idle time afterward.
- **`n + 1`**: Accounts for one execution cycle of the task itself and `n` idle cycles between occurrences.

#### Example:

If task `A` appears 4 times (`max = 4`) and `n = 2`, the scheduling slots would look like:

```
A _ _ A _ _ A _ _ A
```

This requires `(max - 1) * (n + 1) = 3 * 3 = 9` slots.

---

### 2. `+ maxCount`

This term ensures that all tasks with the same maximum frequency are accounted for. The tasks with the same frequency will occupy the last row in the slot structure calculated by `(max - 1) * (n + 1)`.

#### Example:

If tasks `A` and `B` both appear 4 times (`max = 4`, `maxCount = 2`), the last row will have two tasks:

```
A B _ A B _ A B _ A B
```

---

### 3. `Math.max(...)`

This ensures that the total time required is **at least** the number of tasks (`tasks.length`).

- If there are enough unique tasks or `n = 0` (no idle time needed), the execution time is simply the total number of tasks.
- In cases where `(max - 1) * (n + 1) + maxCount` is smaller than `tasks.length`, this ensures the correct result.

#### Example:

If `tasks = ['A', 'B', 'C']` and `n = 2`, the formula ensures:

```
Math.max(3, 0 + 3) = 3
```

---

## Full Algorithm with Formula

```javascript
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let map = {};
  let max = -1;

  // Count task frequencies
  for (let task of tasks) {
    map[task] = (map[task] || 0) + 1;
    max = Math.max(max, map[task]);
  }

  // Count tasks with max frequency
  let maxCount = 0;
  for (let key in map) {
    if (map[key] === max) maxCount++;
  }

  // Apply formula
  return Math.max(tasks.length, (max - 1) * (n + 1) + maxCount);
};
```

---

## Example Walkthrough

### Input:

```javascript
const tasks = ["A", "A", "A", "B", "B", "B", "C", "C"];
const n = 2;
```

### Step 1: Calculate Frequencies

- `A`: 3, `B`: 3, `C`: 2
- `max = 3` (maximum frequency)
- `maxCount = 2` (tasks `A` and `B` share the maximum frequency)

### Step 2: Apply Formula

```javascript
Math.max(tasks.length, (max - 1) * (n + 1) + maxCount)
Math.max(8, (3 - 1) * (2 + 1) + 2)
Math.max(8, 6 + 2)
Math.max(8, 8) = 8
```

### Output:

```javascript
8;
```

---

## Edge Cases

### Case 1: No Idle Time Needed

```javascript
const tasks = ["A", "B", "C"],
  n = 2;
Output: 3;
```

Explanation: All tasks are unique, so no idle time is needed.

### Case 2: Single Task Type

```javascript
const tasks = ["A", "A", "A", "A"],
  n = 2;
Output: 10;
```

Explanation: Task `A` needs idle time between occurrences:

```
A _ _ A _ _ A _ _ A
```

---

## Conclusion

This formula efficiently calculates the minimum time required to execute tasks while adhering to the cooldown constraints. By breaking down the scheduling problem into manageable components, it ensures correctness in all scenarios.
