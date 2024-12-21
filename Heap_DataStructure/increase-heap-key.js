// TC O(logn) for Increasing the Heap Key
const increaseHeapKey = (arr, index, newValue) => {
    if (index < 0 || index >= arr.length) {
        throw new Error("Index is out of bounds.");
    }

    if (newValue < arr[index]) {
        throw new Error("New value must be greater than or equal to the current value.");
    }

    // Step 1: Update the value at the given index
    arr[index] = newValue;

    // Step 2: Bubble up to restore the max-heap property
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && arr[parentIndex] < arr[index]) {
        // Swap the current element with its parent
        [arr[index], arr[parentIndex]] = [arr[parentIndex], arr[index]];

        // Move up the tree
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
    }
};

// Sample tests
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Increase a key Algo
increaseHeapKey(values, 3, 9);
console.log("Heap", values);
// [ 'Heap', Array(9) [ 9, 0, 2, 1, 4, 5, 6, 7, 8 ] ]