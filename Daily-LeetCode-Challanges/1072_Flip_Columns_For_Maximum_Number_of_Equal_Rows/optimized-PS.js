// I used the Normalization, concept discussed in the readme.md file

// First I did Normalization, through hasMap Algorithm
// then after used the counting hasMap algo

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrixValues) {
    const result = {};
    let maxValueReturn = 0;
    for (let row of matrixValues) {
        let directValue = row.join(''); //10
        let flippedValue = row.map(value => 1 - value).join(''); //01  
        let normalized = directValue < flippedValue ? directValue : flippedValue; //10 < 01
        result[normalized] = (result[normalized] || 0) + 1;
    }
    // you need to use counting algorithm for max value

    for (let highValue in result) {
        maxValueReturn = Math.max(result[highValue], maxValueReturn);
    }
    return maxValueReturn
};