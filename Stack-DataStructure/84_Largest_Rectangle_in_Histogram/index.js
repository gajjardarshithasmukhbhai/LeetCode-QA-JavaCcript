/**
 * @param {number[]} heights
 * @return {number}
 */
const heightsValue = [2, 1, 5, 6, 2, 3]
var largestRectangleArea = function (heights) {
    const smHeightFromRight = [];
    const smHeightFromLeft = [];
    const smHeightFromLeftStack = [];
    const smHeightFromRightStack = [];
    let finalResult = 0;
    // smallest Height from right
    for (let i = heights.length - 1; i >= 0; i--) {
        while (smHeightFromRightStack.length > 0 && heights[i] <= heights[smHeightFromRightStack[smHeightFromRightStack.length - 1]]) {
            smHeightFromRightStack.pop();
        }
        if (smHeightFromRightStack.length === 0) {
            smHeightFromRight[i] = heights.length;
        }
        else {
            smHeightFromRight[i] = smHeightFromRightStack[smHeightFromRightStack.length - 1];
        }
        smHeightFromRightStack.push(i);
    }
    // smallest heights from Left
    for (let i = 0; i < heights.length; i++) {
        while (smHeightFromLeftStack.length > 0 && heights[i] <= heights[smHeightFromLeftStack[smHeightFromLeftStack.length - 1]]) {
            smHeightFromLeftStack.pop();
        }
        if (smHeightFromLeftStack.length === 0) {
            smHeightFromLeft[i] = -1;
        }
        else {
            smHeightFromLeft[i] = smHeightFromLeftStack[smHeightFromLeftStack.length - 1];
        }
        smHeightFromLeftStack.push(i)
    }
    for (let i = 0; i < smHeightFromLeft.length; i++) {
        if (finalResult < heights[i] * (smHeightFromRight[i] - smHeightFromLeft[i] - 1)) {
            finalResult = heights[i] * (smHeightFromRight[i] - smHeightFromLeft[i] - 1);
        }
    }
    return finalResult;
};
console.log(largestRectangleArea(heightsValue));