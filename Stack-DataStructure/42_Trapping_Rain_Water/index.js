const leftMaxArray = (heights) => {
    const leftMax = [];
    let maxSoFar = 0;
    for (let i = 0; i < heights.length; i++) {
        maxSoFar = Math.max(maxSoFar, heights[i]);
        leftMax.push(maxSoFar);
    }
    return leftMax;
}

const rightMaxArray = (heights) => {
    const rightMax = new Array(heights.length);
    let maxSoFar = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
        maxSoFar = Math.max(maxSoFar, heights[i]);
        rightMax[i] = maxSoFar;
    }
    return rightMax;
};

const trap = (heights) => {
    const leftMax = leftMaxArray(heights);
    const rightMax = rightMaxArray(heights);
    let result = 0;

    for (let i = 0; i < heights.length; i++) {
        const waterLevel = Math.min(leftMax[i], rightMax[i]);
        if (waterLevel > heights[i]) {
            result += (waterLevel - heights[i]);
        }
    }

    return result;
}