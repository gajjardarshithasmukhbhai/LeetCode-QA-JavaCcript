// O(nlogn)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/

const minHeapify = (arr, length, parentIndex) => {
    let smallest = parentIndex; // Initialize smallest as parent
    let left = parentIndex * 2 + 1; // Left child index
    let right = left + 1; // Right child index

    // Compare left child with the smallest
    if (left < length && arr[left] < arr[smallest]) {
        smallest = left;
    }

    // Compare right child with the smallest
    if (right < length && arr[right] < arr[smallest]) {
        smallest = right;
    }

    // If smallest is not the parent, swap and recursively heapify
    if (smallest !== parentIndex) {
        [arr[parentIndex], arr[smallest]] = [arr[smallest], arr[parentIndex]];
        minHeapify(arr, length, smallest);
    }
};

var findKthLargest = function (arr, k) {
    let length = arr.length;

    // Step 1: Build Min-Heap (Start from the last parent node) // it's bubble up it mantain the Heap to call again and again
    // also we can say ======> buildMinHeap or bubbleUp
    let lastParentIndex = Math.floor(length / 2 - 1);
    while (lastParentIndex >= 0) {
        minHeapify(arr, length, lastParentIndex);
        lastParentIndex--;
    }

    // Step 2: Sort the array
    let lastChildIndex = length - 1;
    while (lastChildIndex > 0) {
        // Swap root (smallest) with the last child
        [arr[0], arr[lastChildIndex]] = [arr[lastChildIndex], arr[0]];

        // Reduce heap size and re-heapify
        minHeapify(arr, lastChildIndex, 0);
        lastChildIndex--;
    }

    return arr[k - 1];
};