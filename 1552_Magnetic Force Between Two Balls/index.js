// approach:
// step:1 Sort the positions: We need to start with sorted positions to make it easier to calculate distances between balls.
// step:2 Binary search on the answer: We perform binary search on the possible values of the minimum magnetic force. The possible range for the force is from 1 to the difference between the maximum and minimum position.
// step:3 Greedy check: For each candidate distance (mid value in binary search), we check if it is possible to place all m balls such that the minimum distance between any two balls is at least this candidate distance. If it is possible, then we try for a larger distance; otherwise, we try for a smaller distance.
// Binary Search Tree and Greedy Algo Combination
const maxDistance = (positions, m) => {
    positions.sort((a, b) => a - b);

    const canPlaceBalls = (minDist) => {
        let count = 1;

        let lastPos = positions[0];
        for (let i = 1; i < positions.length; i++) {
            if (positions[i] - lastPos >= minDist) {
                count++;
                lastPos = positions[i];
                if (count >= m) return true;
            }
        }
        return false;
    };

    let left = 1;
    let right = positions[positions.length - 1] - positions[0];
    let result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canPlaceBalls(mid)) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};

let position = [1, 2, 3, 4, 7];
let ball = 2;
console.log(maxDistance(position, ball)); // Output: 3
