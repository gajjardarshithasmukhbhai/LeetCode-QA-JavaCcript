/**
 * @param {number[]} stones
 * @return {number}
 */

// enqueue => Insert => 𝑂(log⁡𝑛)
// dequeue => Remove => O(logn)
// Front => Peek => O(1)
var lastStoneWeight = (stones) => {

    const heap = new MaxPriorityQueue();
    for (let value of stones) {
        heap.enqueue(value);
    }

    while (heap.size() > 1) {
        let diff = heap.dequeue().element - heap.dequeue().element;
        if (diff > 0) {
            heap.enqueue(diff);
        }
    }
    return heap.size() === 0 ? 0 : heap.front().element;
};