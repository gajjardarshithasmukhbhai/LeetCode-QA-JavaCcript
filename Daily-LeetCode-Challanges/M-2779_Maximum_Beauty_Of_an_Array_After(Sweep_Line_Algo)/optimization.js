/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
    const events = [];

    // Add start and end events for each range
    for (const num of nums) {
        events.push([num - k, 1]);       // Start of range
        events.push([num + k + 1, -1]); // End of range (exclusive)
    }

    // Sort events: first by position, then by type of event (-1 before 1 if same position)
    events.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]; // Process ends (-1) before starts (+1) if same position
        }
        return a[0] - b[0];
    });

    let maxBeauty = 0;
    let currentFrequency = 0;

    // Sweep through events
    for (const [position, eventType] of events) {
        currentFrequency += eventType;
        maxBeauty = Math.max(maxBeauty, currentFrequency);
    }

    return maxBeauty;
};