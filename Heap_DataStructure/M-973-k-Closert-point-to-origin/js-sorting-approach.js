// * Todo: Sort through JavaScript Method 

const kClosest = (points, k) => {
    const listOfPoints = [];
    const result = [];
    for (let i = 0; i < points.length; i++) {
        let value1 = Math.pow(points[i][0], 2);
        let value2 = Math.pow(points[i][1], 2);
        listOfPoints[i] = [Math.sqrt(value1 + value2), i];
    }

    listOfPoints.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < k; i++) {
        result[i] = points[listOfPoints[i][1]]
    }
    return result;

};
console.log(kClosest([[-5, 4], [-6, -5], [4, 6]], 2));
// O/p => [ [ -5, 4 ], [ 4, 6 ] ]

// * Todo: simple way of Above Code

const kClosest = (points, k) => {
    points.sort((a, b) => (Math.pow(a[0], 2) + Math.pow(a[1], 2)) - (Math.pow(b[0], 2) + Math.pow(b[1], 2)));
    return points.slice(0, k);
};