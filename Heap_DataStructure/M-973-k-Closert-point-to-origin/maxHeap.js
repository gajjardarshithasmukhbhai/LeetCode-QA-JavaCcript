// Heap Algorithm Used Here
const maxHeapify = (points, length, parentIndex) => {
    let largest = parentIndex;
    let left = parentIndex * 2 + 1;
    let right = parentIndex * 2 + 2;

    if (left < length && points[left][0] > points[largest][0]) {
        largest = left;
    }
    if (right < length && points[right][0] > points[largest][0]) {
        largest = right;
    }

    // if parent already have higher value or already maxHeap
    if (largest !== parentIndex) {
        [points[parentIndex], points[largest]] = [points[largest], points[parentIndex]];
        maxHeapify(points, length, largest);
    }
    return points
}

const kClosest = (points, k) => {
    let listOfPoints = [];
    let result = [];
    for (let i = 0; i < points.length; i++) {
        let value1 = Math.pow(points[i][0], 2);
        let value2 = Math.pow(points[i][1], 2);
        listOfPoints[i] = [value1 + value2, i];
    }

    let pointsLength = points.length;
    let lastParentIndex = Math.floor(pointsLength / 2 - 1);
    let lastChildIndex = pointsLength - 1;

    // buildHeap or BubbleUp => Bottom to Up
    while (lastParentIndex >= 0) {
        maxHeapify(listOfPoints, pointsLength, lastParentIndex);
        lastParentIndex--;
    }

    // From Swap the Numbers from last to TOP
    while (lastChildIndex >= 0) {
        [listOfPoints[0], listOfPoints[lastChildIndex]] = [listOfPoints[lastChildIndex], listOfPoints[0]];
        maxHeapify(listOfPoints, lastChildIndex, 0);
        lastChildIndex--;
    }
    console.log(listOfPoints);
    for (let i = 0; i < k; i++) {
        result[i] = points[listOfPoints[i][1]];
    }
    return result;
};

console.log(kClosest([[1, 3], [-2, 2], [4, 4]], 2));
