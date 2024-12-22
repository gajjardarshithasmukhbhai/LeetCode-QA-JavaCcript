## LeetCode supports the MaxPriorityQueue

1. enqueue():

- so Actually for this we need to implement the entire Heap, but we can Implement through inbuilt methods of the LeetCode
- Adds an element to the priority queue. If a priority is not provided, the queue defaults to the value of the element as its priority.

2. dequeue():

- Removes and returns the element with the highest priority in the queue.

3. front():

- Returns the element with the highest priority without removing it from the queue.

```javascript
const heap = new MaxPriorityQueue();
heap.enqueue(23);
heap.enqueue(32);
heap.enqueue(43);
console.log(heap.dequeue().element); // O/P => 43 will be removed
console.log(heap.front().element); // O/p => give 32 because 43 we already removed
```
