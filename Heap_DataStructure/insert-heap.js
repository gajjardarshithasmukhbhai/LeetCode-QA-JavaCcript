const insertIntoHeap = (heap, value) => {
    heap.push(value);
    let currentIndex = heap.length - 1;

    while (currentIndex > 0) {
        const parentIndex = Math.floor(currentIndex - 1 / 2);

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
const maxHeap = [10, 9, 8, 3, 4, 7];
console.log(insertIntoHeap(maxHeap, 22)); //Array(7) [ 22, 10, 9, 8, 3, 4, 7 ]