// sliding window Approach
var maxSlidingWindow = function (nums, k) {
    let result = [];
    let deque = []; // stores values of elements in 'nums'
    let i = 0;
    let j = 0;

    while (j < nums.length) {
        // Remove elements from the back of the deque that are less than the current element
        while (deque.length > 0 && deque[deque.length - 1] < nums[j]) {
            deque.pop();
        }

        // Add current element value to the deque
        deque.push(nums[j]);

        // If we have a valid window, record the max value in result
        if (j - i + 1 >= k) {
            result.push(deque[0]);

            // Remove the element going out of the window
            if (nums[i] === deque[0]) {
                deque.shift();
            }
            i++;
        }
        j++;
    }

    return result;
};