/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    // Calculate the number of complete chunks
    let chunks = Math.floor(time / (n - 1));
    
    // Calculate the position within the current chunk
    let positionInChunk = time % (n - 1);

    // Determine the final position based on whether the chunk number is even or odd
    return chunks % 2 === 0 
        ? (positionInChunk + 1)       // Even chunk: increasing sequence
        : (n - positionInChunk);      // Odd chunk: decreasing sequence
};