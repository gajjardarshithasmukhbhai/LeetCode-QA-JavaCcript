// HERE I used the Insertion Heap algo, so it will insert new ele with sorting form

var MedianFinder = function () {
    this.sortedValues = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (value) {
    this.sortedValues.push(value);
    let currentIndex = this.sortedValues.length - 1;
    while (currentIndex > 0) {
        let parentIndex = Math.floor(currentIndex - 1 / 2);

        if (this.sortedValues[currentIndex] > this.sortedValues[parentIndex]) {
            [this.sortedValues[parentIndex], this.sortedValues[currentIndex]] = [this.sortedValues[currentIndex], this.sortedValues[parentIndex]];
            currentIndex = parentIndex
        }
        else {
            break;
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    const n = this.sortedValues.length;
    //even
    if (n === 1) {
        return this.sortedValues[0];
    }
    if (n % 2 === 0) {
        let mid1 = this.sortedValues[n / 2 - 1];
        let mid2 = this.sortedValues[n / 2]
        return (mid1 + mid2) / 2;
    }
    else {
        const middle = Math.floor(n / 2);
        return this.sortedValues[middle];
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */