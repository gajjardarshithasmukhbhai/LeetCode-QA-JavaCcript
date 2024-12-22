const popFromHeap = (heap) => {
    if (heap.length === 0) {
        throw new Error("Heap is empty");
    }

    // Swap the root (max value) with the last element
    const maxValue = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop(); // Remove the last element (previous root)

    let currentIndex = 0;
    const length = heap.length;

    // Bubble down the value at the root to maintain the max-heap property
    while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;

        let largestIndex = currentIndex;

        // Check if the left child exists and is larger than the current largest
        if (leftChildIndex < length && heap[leftChildIndex] > heap[largestIndex]) {
            largestIndex = leftChildIndex;
        }

        // Check if the right child exists and is larger than the current largest
        if (rightChildIndex < length && heap[rightChildIndex] > heap[largestIndex]) {
            largestIndex = rightChildIndex;
        }

        // If the largest value is still the current node, the heap is valid
        if (largestIndex === currentIndex) {
            break;
        }

        // Swap the current node with the largest child
        [heap[currentIndex], heap[largestIndex]] = [heap[largestIndex], heap[currentIndex]];

        // Move to the largest child index
        currentIndex = largestIndex;
    }

    return maxValue; // Return the removed max value
};

// Example usage
const maxHeap = [22, 15, 9, 10, 3, 4, 7, 8];
const maxValue = popFromHeap(maxHeap);
console.log(maxValue); // Output: 22 (max value)
console.log(maxHeap);  // Output: [15, 10, 9, 8, 3, 4, 7]
