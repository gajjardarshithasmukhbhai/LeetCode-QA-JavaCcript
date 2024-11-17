const stack = [10, 20, 30, 40, 50];
const deleteEleMiddle = (arr, sizeOfStack) => {
    // Base Condition
    if (arr.length <= 1) {
        return arr;
    }
    const midIndex = Math.floor(arr.length / 2) + 1;
    console.log('midIndex: ', midIndex);

    // create the Helper Function For removing Ele
    removedAndConquerEle(arr, midIndex);
    return arr;
}

const removedAndConquerEle = (arr, midIndex) => {
    console.log('midIndex: ', midIndex, arr);
    if (midIndex === 1) {
        arr.pop();
        return
    }
    const topEle = arr.pop();

    removedAndConquerEle(arr, midIndex - 1);
    arr.push(topEle);
}
console.log(deleteEleMiddle(stack));