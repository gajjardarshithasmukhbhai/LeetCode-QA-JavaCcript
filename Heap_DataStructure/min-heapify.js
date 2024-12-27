// [::Algorithm::] 

// Step 1: Build a min heap from the input data.
// => min Heap root always be on the TOP

// step 2: At this point, the smallest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of heap by 1. Finally, heapify the root of tree. 
// Repeat above steps while size of heap is greater than 1.
// => we're replacing the value top element make last and last element make the top, through this approach we're sorting in descending order

// Note: Heap Sort using min heap sorts in descending order where as max heap sorts in ascending order


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

const heapSortMin = (arr) => {
    let length = arr.length;

    // Step 1: Build Min-Heap (Start from the last parent node)
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

    return arr;
};

// Example usage
console.log(heapSortMin([3, 2, 3, 1, 2, 4, 5, 5, 6]));
// O/P: [ 6, 5, 5, 4, 3, 3, 2, 2, 1 ]