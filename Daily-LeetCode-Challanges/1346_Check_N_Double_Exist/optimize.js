// HashMap Algo
var checkIfExist = function (values) {
    const result = new Map();
    for (let i = 0; i < values.length; i++) {
        if (result.has(2 * values[i]) || (values[i] % 2 === 0 && result.has(values[i] / 2))) {
            return true;
        }
        result.set(values[i], 1)
    }
    return false;
};

// Multi Pointer Approach
const arr = [3, 1, 7, 11]
// [14,11,7,1]

var checkIfExist = function (arr) {
    arr.sort((a, b) => Math.abs(a) - Math.abs(b));

    let i = 0, j = 1;

    while (i < arr.length - 1) {

        // Check if arr[j] is double of arr[i]
        if (arr[j] === 2 * arr[i]) {
            return true;
        }

        // Move pointers
        if (j < arr.length - 1) {
            j++;
        } else {
            i++;
            j = i + 1; // Reset j to always point after i
        }
    }

    return false;
};
// above kind of approach will negate   
console.log(checkIfExist(arr));

