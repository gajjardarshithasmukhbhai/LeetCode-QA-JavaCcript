// time complexity for this => O(n) + klogn ==> O(n)
// so we optimized from O(logn)
const maxHeapify = (array, length, parentIndex) => {
    let largest = parentIndex;
    let left = largest * 2 + 1;
    let right = largest * 2 + 2;

    if (left < length && array[left][1] > array[largest][1]) {
        largest = left;
    }
    if (right < length && array[right][1] > array[largest][1]) {
        largest = right;
    }
    if (largest !== parentIndex) {
        [array[parentIndex], array[largest]] = [array[largest], array[parentIndex]];
        maxHeapify(array, length, largest);
    }
}

const extractMax = (arr) => {
    if (arr.length === 0) return null; // If heap is empty
    if (arr.length === 1) return arr.pop(); // Only one element in heap

    const max = arr[0]; // The maximum value (root of the heap)
    arr[0] = arr.pop(); // Replace root with the last element
    maxHeapify(arr, arr.length, 0); // Re-heapify to maintain max-heap property

    return max;
}

var topKFrequent = (nums, k) => {
    // using the HasMap algo
    let frequencyOfEle = new Map();

    for (let value of nums) {
        frequencyOfEle.set(value, frequencyOfEle.get(value) + 1 || 1);
    }

    let frequnecyArray = [...frequencyOfEle.entries()];

    let length = frequnecyArray.length;
    let lastParentIndex = Math.floor(length / 2) - 1;

    for (let i = lastParentIndex; i >= 0; i--) {
        maxHeapify(frequnecyArray, length, i);
    }
    // Step 4: Extract top K elements
    let result = [];
    for (let i = 0; i < k; i++) {
        let max = extractMax(frequnecyArray);
        if (max) result.push(max[0]);
    }

    return result;
}
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(nums, k)); // Output: [1, 2]


// Here Below Algo Approached are used

// 1. Through Has Map find the frequency of ele
// 2. then after[[1, 3], [2, 2], [3, 1]] => get this
//     - then after use maxHeapify algorithm and extract or Pop element based on the k element
// 3. so total 3 algorithm used
//     - HashMap
//     - Heap => maxHeapify
//     - Heap => Extract or Pop
