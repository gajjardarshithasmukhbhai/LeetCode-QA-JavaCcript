// Time Taken O(logn) for Extracting the Max Value

const maxHeapify = (arr, length, parentIndex) => {
    let largest = parentIndex; // Initialize largest as parent
    let left = parentIndex * 2 + 1; // Left child index
    let right = left + 1; // Right child index

    // Compare left child with the largest
    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    // Compare right child with the largest
    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not the parent, swap and recursively heapify
    if (largest !== parentIndex) {
        [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];
        maxHeapify(arr, length, largest);
    }
};

const buildMaxHeap = (arr) => {
    let length = arr.length;

    // Start from the last parent node
    let lastParentIndex = Math.floor(length / 2 - 1);
    while (lastParentIndex >= 0) {
        maxHeapify(arr, length, lastParentIndex);
        lastParentIndex--;
    }
};

const extractMax = (arr) => {
    if (arr.length === 0) return null; // If heap is empty
    if (arr.length === 1) return arr.pop(); // Only one element in heap

    const max = arr[0]; // The maximum value (root of the heap)
    arr[0] = arr.pop(); // Replace root with the last element
    maxHeapify(arr, arr.length, 0); // Re-heapify to maintain max-heap property

    return max;
};

// Example usage:
const values = [3, 2, 3, 1, 2, 4, 5, 5, 6];
buildMaxHeap(values);
console.log("Max Heap:", values); // Max-Heap representation

const max = extractMax(values);
console.log("Extracted Max:", max);
console.log("Heap after extraction:", values);
