# Approach for Maximum Beauty of an Array After Applying Operation

The solution uses the **sweep line algorithm** to calculate the maximum frequency (beauty) of overlapping ranges efficiently, without using a hash map. Below is a detailed explanation of the approach.

---

## 1. Define Events

- **Observation**:

  - For a number `num` and a range `[num - k, num + k]`:
    - Add a **start event** at `num - k` with `+1` (indicating the start of influence).
    - Add an **end event** at `num + k + 1` with `-1` (indicating the end of influence).

- **Why Events?**
  - Events represent changes in the "active" frequency of ranges:
    - `+1` means a new range starts, increasing the frequency.
    - `-1` means a range ends, decreasing the frequency.

---

## 2. Sort Events

- **Sorting Logic**:

  - Events are sorted by position (the key where changes occur).
  - If two events occur at the same position:
    - Process `-1` (end of range) before `+1` (start of range) to ensure overlaps are handled correctly.

- **Sorting Complexity**:
  - Sorting ensures that all range changes are processed in the correct sequence, maintaining a consistent running count of active ranges.

---

## 3. Sweep Through Events

- **Initialize Variables**:

  - `currentFrequency`: Tracks the current count of overlapping ranges.
  - `maxBeauty`: Tracks the maximum value of `currentFrequency`.

- **Processing Events**:

  - Traverse through the sorted list of events.
  - For each event:
    - Adjust the `currentFrequency` by the event type (`+1` or `-1`).
    - Update `maxBeauty` if `currentFrequency` exceeds its current value.

- **Why This Works?**
  - The sweep line algorithm efficiently tracks the "active" ranges at each position by processing only the points where changes occur (start or end of ranges).

---

## 4. Return the Result

- After processing all events, `maxBeauty` holds the maximum frequency of overlapping ranges, which is the desired "beauty" of the array.

---

## Complexity Analysis

1. **Time Complexity**:

   - **Creating Events**: \(O(n)\), as we iterate over the input array.
   - **Sorting Events**: \(O(n \log n)\), as we sort the event list.
   - **Processing Events**: \(O(n)\), as we iterate through the sorted events.
   - **Overall**: \(O(n \log n)\).

2. **Space Complexity**:
   - Storing events: \(O(n)\).

---

## Example Walkthrough

### Input: `nums = [4, 6, 1, 2], k = 2`

1. **Create Events**:

   - For `4`: Range `[2, 6]` → Events: `[2, +1]`, `[7, -1]`.
   - For `6`: Range `[4, 8]` → Events: `[4, +1]`, `[9, -1]`.
   - For `1`: Range `[-1, 3]` → Events: `[-1, +1]`, `[4, -1]`.
   - For `2`: Range `[0, 4]` → Events: `[0, +1]`, `[5, -1]`.

2. **Sort Events**:

   - Sorted events: `[[-1, +1], [0, +1], [2, +1], [4, +1], [4, -1], [5, -1], [7, -1], [9, -1]]`.

3. **Process Events**:

   - At `-1`: `currentFrequency = 1`, `maxBeauty = 1`.
   - At `0`: `currentFrequency = 2`, `maxBeauty = 2`.
   - At `2`: `currentFrequency = 3`, `maxBeauty = 3`.
   - At `4`: `currentFrequency = 4`, `maxBeauty = 4`.
   - At `4`: `currentFrequency = 3`, `maxBeauty = 4`.
   - At `5`: `currentFrequency = 2`, `maxBeauty = 4`.
   - At `7`: `currentFrequency = 1`, `maxBeauty = 4`.
   - At `9`: `currentFrequency = 0`, `maxBeauty = 4`.

4. **Result**: `maxBeauty = 4`.

---

## Why Use This Approach?

This approach is efficient and avoids unnecessary computations (e.g., directly iterating over all possible values). By focusing only on **key change points**, it optimizes both time and space usage while maintaining correctness.
