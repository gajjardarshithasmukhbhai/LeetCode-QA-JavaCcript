Here we used commulative approach to solved this issue

The cumulative sum is the running total of a sequence of numbers, where each value in the cumulative sum is the sum of all previous numbers in the sequence up to that point.

For example:

Given a sequence of numbers: [2, 4, 6, 8]
The cumulative sum would be: [2, 6, 12, 20]
Here’s how it’s calculated step-by-step:

First value: 2
Second value: 2 + 4 = 6
Third value: 6 + 6 = 12
Fourth value: 12 + 8 = 20

The cumulative sum approach can be applied to various types of LeetCode questions, especially those involving prefix sums, sliding windows, or subarray problems. Below are some common types of questions where the cumulative sum method is useful:

1. Subarray Sum Problems
   These problems involve finding subarrays that meet a certain condition, like having a specific sum.

Example Problems:

- Subarray Sum Equals K:
  Find the number of subarrays whose sum equals a given value k.
  Use cumulative sums to calculate the difference between the current sum and k efficiently.

- Continuous Subarray Sum:
  Determine if there exists a continuous subarray whose sum is a multiple of k.
  Use cumulative sums with modular arithmetic.

2. Range Sum Queries
   Cumulative sums are useful for efficiently calculating sums of elements in a specific range.

Example Problems:

- Range Sum Query - Immutable:
  Precompute cumulative sums to allow efficient querying of sums over a range.

- Range Sum Query 2D - Immutable:
  Extend cumulative sums to a 2D grid for efficient querying of submatrix sums.

3. Kadane's Algorithm Variants
   Cumulative sums can help optimize or simplify problems related to the maximum sum of subarrays.

Example Problems:

- Maximum Subarray:
  Use cumulative sums to track the maximum subarray sum by subtracting the smallest prefix sum seen so far.

- K-Concatenation Maximum Sum:
  Use cumulative sums for handling concatenated arrays and managing the sum across boundaries.

4. Sliding Window or Prefix Problems
   Cumulative sums can be used with sliding windows to track sums dynamically.

Example Problems:

- Subarray Sums Divisible by K:
  Use cumulative sums with modulo to find subarrays whose sum is divisible by k.

- Binary Subarrays With Sum:
  Count the number of subarrays with a given sum using cumulative sums.

5. Difference Array or Delta Problems
   Cumulative sums are used in reverse to calculate the actual values from a difference array.

Example Problems:

- Corporate Flight Bookings:
  Use a difference array to apply updates and then compute the final result using cumulative sums.
  General Tips for Recognizing Cumulative Sum Applications:
  When to Apply:

Questions that involve sums of subarrays, ranges, or specific conditions like divisors or targets.
Problems requiring optimized querying or preprocessing of data.
Key Technique:

Maintain a running total to avoid recomputing sums multiple times.
Use hash maps (dictionaries) to store intermediate cumulative sums for efficient lookups.

## Approach-1

![3152-1](https://gist.github.com/user-attachments/assets/80d1856f-3449-4f61-a1c5-e5dd5a961f17)

## Approach-2

![3152-2](https://gist.github.com/user-attachments/assets/f819ff11-d88a-4b7d-ab56-6cb62883bcf9)
