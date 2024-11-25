const matrix = [[0, 1], [1, 1]]

function maxEqualRowsAfterFlips(matrix) {
    let maxReturn = 0;

    for (let iterationRow = 0; iterationRow < matrix.length; iterationRow++) {
        let identicalRow = 0;

        for (let i = 0; i < matrix.length; i++) {
            let isMatchedDirectly = true;
            let isMatchFlipped = true;

            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[iterationRow][j] !== matrix[i][j]) {
                    isMatchedDirectly = false;
                }
                if (matrix[iterationRow][j] !== 1 - matrix[i][j]) {
                    isMatchFlipped = false;
                }
            }

            if (isMatchedDirectly || isMatchFlipped) {
                identicalRow++;
            }
        }

        maxReturn = Math.max(maxReturn, identicalRow);
    }

    return maxReturn;
}

console.log(maxEqualRowsAfterFlips(matrix)); // Output: 2
