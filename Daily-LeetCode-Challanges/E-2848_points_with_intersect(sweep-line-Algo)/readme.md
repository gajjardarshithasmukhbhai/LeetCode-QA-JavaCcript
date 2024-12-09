# Sweep Line Algorithm: Overview and Approach

The **Sweep Line Algorithm** is a powerful computational geometry technique used to solve interval or event-based problems. It works by conceptually sweeping a vertical line (or cursor) across a set of intervals or points, processing events as the line encounters them in sorted order.

This Algorithm is used for the find the value of intersection

---

## Key Concepts

1. **Events**:  
   Events are critical points where a change occurs in the state of the problem, such as the start or end of an interval.  
   Example:

   - For an interval `[start, end]`, create two events:
     - `(start, +1)` – Start of the interval.
     - `(end + 1, -1)` – End of the interval (one past the endpoint).

2. **Active Intervals**:  
   These are the intervals currently intersected by the sweep line. Tracking active intervals helps compute overlaps, union length, or intersections.

3. **Sorting Events**:  
   Events are sorted first by position. If two events have the same position:

   - Start events (`+1`) are processed before end events (`-1`) to maintain correctness.

4. **Processing Events**:  
   As the line sweeps:
   - Update the count of active intervals based on the event type (`+1` or `-1`).
   - Perform problem-specific computations at each event.

---

## Approach for Problem: Points That Intersect With Cars

### Problem Statement

Given a list of intervals where each interval `[start, end]` represents the range of a car, count the number of unique points that intersect with at least one car.

### Steps:

1. **Generate Events**:  
   For each interval `[start, end]`, create:

   - `(start, +1)` – Start of the interval.
   - `(end + 1, -1)` – End of the interval.

2. **Sort Events**:

   - Sort by position.
   - For the same position, prioritize `+1` over `-1`.

3. **Sweep and Track Active Intervals**:

   - Maintain a count of active intervals (`active_intervals`).
   - Track the last processed position (`prev_position`) to calculate the number of unique points covered.

4. **Calculate Covered Points**:
   - If `active_intervals > 0`, the points between `prev_position` and the current event position are covered.
   - Add these points to the total count.

---

## JavaScript Code

Here is the implementation:

```javascript
/**
 * Function to count unique points that intersect with cars.
 * @param {number[][]} intervals - Array of intervals [start, end].
 * @returns {number} - Total unique points covered.
 */
function countUniquePoints(intervals) {
  // Step 1: Generate events
  let events = [];
  intervals.forEach(([start, end]) => {
    events.push([start, +1]); // Start of interval
    events.push([end + 1, -1]); // End of interval
  });

  // Step 2: Sort events
  events.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]; // +1 before -1 for the same position
    }
    return a[0] - b[0]; // Sort by position
  });

  // Step 3: Initialize variables
  let active_intervals = 0;
  let prev_position = null;
  let total_points = 0;

  // Step 4: Process events
  for (const [position, eventType] of events) {
    if (prev_position !== null && active_intervals > 0) {
      // Add the points between prev_position and current position
      total_points += position - prev_position;
    }

    // Update active intervals count
    active_intervals += eventType;
    prev_position = position; // Update last processed position
  }

  return total_points;
}

// Example Usage
const intervals = [
  [1, 3],
  [2, 4],
  [5, 6],
];
console.log(countUniquePoints(intervals)); // Output: 5
```

## Explanation of Code

1. Event Generation:

- For each interval, we generate two events:
  (start, +1) indicates the start of the interval.
  (end + 1, -1) indicates the end of the interval.

2. Sorting:

Events are sorted first by position. If positions are equal, +1 (start) is processed before -1 (end).

3. Processing Events:

- For each event:

If there are active intervals (active_intervals > 0), the distance from the previous position to the current position represents covered points.
Update the active_intervals count based on the event type (+1 or -1).

4. Final Count:

The total number of unique points covered is accumulated in total_points.
Complexity Analysis

- Time Complexity: O(nlogn)
