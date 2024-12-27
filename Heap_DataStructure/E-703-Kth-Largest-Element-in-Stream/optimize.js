// Algorithm:
// For Decreasing the Value we use the <MinHeapify> and SWAP the values, top element always be small and last always be greater. 
// so we swap two values and continue to do it

// we use bubble Up it will continuously, from bottom to up. will minified the values
class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.nums = [];

        // We are calling the add method to push the values
        nums.forEach(value => {
            this.add(value);
        });
    }

    add(value) {
        if (this.nums.length < this.k) {
            this.nums.push(value);
            this.bubbleUp();
        }
        else if (value > this.nums[0]) {
            // Replace root if new value is larger
            this.nums[0] = value;
            this.minHeapify(this.nums, this.nums.length, 0);
        }

        return this.nums[0];

    }
    //  this will repetitively call the minHeapify and try to mantain the Heap
    bubbleUp() {
        let lastParentIndex = Math.floor(this.nums.length / 2 - 1);
        while (lastParentIndex >= 0) {
            this.minHeapify(this.nums, this.nums.length, lastParentIndex);
            lastParentIndex--;
        }
    }
    minHeapify(arr, length, parentIndex) {
        let smaller = parentIndex;
        let left = parentIndex * 2 + 1;
        let right = parentIndex * 2 + 2;
        if (left < length && arr[left] < arr[smaller]) {
            smaller = left;
        }
        if (right < length && arr[right] < arr[smaller]) {
            smaller = right;
        }
        if (smaller !== parentIndex) {
            //swap the Numbers
            [arr[parentIndex], arr[smaller]] = [arr[smaller], arr[parentIndex]];
            this.minHeapify(arr, length, smaller);
        }
    }
}

// Example Usage:
const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3)); // Output: 4
console.log(kthLargest.add(5)); // Output: 5
console.log(kthLargest.add(10)); // Output: 5
console.log(kthLargest.add(9)); // Output: 8
console.log(kthLargest.add(4)); // Output: 8
