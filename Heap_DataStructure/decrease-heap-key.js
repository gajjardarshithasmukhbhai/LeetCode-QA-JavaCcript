const maxHeapify = (arr, length, parentIndex) => {
    let largest = parentIndex;
    const left = parentIndex * 2 + 1;
    const right = parentIndex * 2 + 2;

    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== parentIndex) {
        [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];
        maxHeapify(arr, length, largest);
    }
};

const percolateUp = (arr, index) => {
    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0 && arr[index] > arr[parentIndex]) {
        [arr[index], arr[parentIndex]] = [arr[parentIndex], arr[index]];
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
    }
};

const decreaseHeapKey = (arr, index, newValue) => {
    if (newValue > arr[index]) {
        throw new Error("New value should be smaller than the existing value");
    }

    // Update the value at the specified index
    arr[index] = newValue;

    // Decide whether to percolate up or down
    const parentIndex = Math.floor((index - 1) / 2);

    if (index > 0 && newValue > arr[parentIndex]) {
        // Percolate up if newValue is greater than its parent
        percolateUp(arr, index);
    } else {
        // Percolate down otherwise
        maxHeapify(arr, arr.length, index);
    }
};

// Example usage
const values = [7, 10, 6, 3, 4, 2]; // Assume this is a max heap
const newValue = 9; // New value to replace at the specified index
const index = 1; // Index of the value to be decreased

console.log("Before decreasing key:", values);
decreaseHeapKey(values, index, newValue);
console.log("After decreasing key:", values);
