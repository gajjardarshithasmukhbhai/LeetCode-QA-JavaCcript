const values = [2, 3, 5, 4, 7, 1];
const sortArray = (array) => {
    if (array.length <= 1) {
        return array;
    }
    // First Divide the Array and then after conquer
    const lastEle = array.pop();
    sortArray(array);
    // insert the element 
    insertInSortOrder(array, lastEle);
    return array;
}
const insertInSortOrder = (array, lastElement) => {
    if (array.length === 0 || array[array.length - 1] <= lastElement) {
        array.push(lastElement);
        return
    }
    const conquerRemove = array.pop();
    insertInSortOrder(array, lastElement);
    array.push(conquerRemove);
}
console.log(sortArray(values));

// Counting Algorithm

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(values) {
    const smallestNum = Math.min(...values);
    const longestNum = Math.max(...values);
    const repeatedNum = {};
    const result = [];
    let count = 0;

    for (let num of values) {
        repeatedNum[num] = (repeatedNum[num] || 0) + 1;
    }
    // print the values
    for (let i = smallestNum; i <= longestNum; i++) {
        while (repeatedNum[i] > 0) {
            result.push(i);
            ++count;
            repeatedNum[i]--;
        }
    }
    return result;
}