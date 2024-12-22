// Insert Heap element and push the value in heap, both are generally same

const pushToHeap = (heap, value) => {
    heap.push(value);
    let currentIndex = heap.length - 1;

    while (currentIndex > 0) {
        let parentIndex = Math.floor(currentIndex - 1 / 2);
        if (heap[currentIndex] > heap[parentIndex]) {
            [heap[parentIndex], heap[currentIndex]] = [heap[currentIndex], heap[parentIndex]];
            currentIndex = parentIndex;
        }
        else {
            break;
        }
    }
    return heap;
}
console.log(pushToHeap([7, 3, 4, 5, 1, 9], 12));