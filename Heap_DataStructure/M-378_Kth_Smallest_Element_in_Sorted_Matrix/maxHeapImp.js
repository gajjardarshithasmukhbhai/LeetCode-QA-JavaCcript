// O(nlogn)
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

const heapify = (arr, length, parentIndex) => {
    let largest = parentIndex;
    let left = parentIndex * 2 + 1;
    let right = left + 1;
    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== parentIndex) {
        [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];
        heapify(arr, length, largest);
    }
    return arr;
}

var kthSmallest = function (matrix, k) {
    let arr = matrix.flat();
    let length = arr.length;
    let lastParentIndex = Math.floor(length / 2 - 1);
    let lastChildrenIndex = length - 1;
    // Internal Nodes
    while (lastParentIndex >= 0) {
        heapify(arr, length, lastParentIndex);
        lastParentIndex--;
    }
    // Heapify for Child Nodes
    while (lastChildrenIndex >= 0) {
        [arr[0], arr[lastChildrenIndex]] = [arr[lastChildrenIndex], arr[0]];
        heapify(arr, lastChildrenIndex, 0)
        lastChildrenIndex--;
    }
    return arr[k - 1];
};