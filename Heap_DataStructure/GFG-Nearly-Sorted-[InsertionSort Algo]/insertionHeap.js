// Time complexity => O(nlogn)
// Space Complexity => O(n)

// - Here we can use the HeapSort Algorithm
// there Time Complexity also O(nlogn)

const insertionInHeap = (heap, value) => {
    heap.push(value);
    let currentIndex = heap.length - 1;
    while (currentIndex > 0) {
        let parentIndex = Math.floor(currentIndex - 1 / 2);

        if (heap[currentIndex] > heap[parentIndex]) {
            [heap[parentIndex], heap[currentIndex]] = [heap[currentIndex], heap[parentIndex]];
            currentIndex = parentIndex
        }
        else {
            break;
        }
    }
    return heap;
}

const kSortedList = (values, k) => {
    let newSortedListArray = [];

    for (let i = 0; i <= k; i++) {
        insertionInHeap(newSortedListArray, values[i]);
    }
    for (let i = k + 1; i < values.length; i++) {
        insertionInHeap(newSortedListArray, values[i]);
    }
    return newSortedListArray;
}
console.log(kSortedList([1, 4, 5, 2, 3, 6, 7, 8, 9, 10], 5)); // Array(10) [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
