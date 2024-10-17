// when for loop comes, and same time inner for Loop come. so thumb rule is optimize with the
// -stack 


// PS: basically [1,3,2,4] => In brut force we need o(n^2), But we can easily optimize through the 
// stack => High Level Understanding
// 1 => 3 is right nearest greater. here not we conside max value :::NOTE:::
// 3 => 2 X No, 4 Yes because 2 is right lower value and 4 is right greater value
// 2 => 4 
// 4 no right choice so it will be -1


// youtube link: https://www.youtube.com/watch?v=NXOOYYwpbg4&t=1097s
const nearestGreaterRight = (values) => {
    const result = [];
    const stack = [];
    for (let i = values.length - 1; i >= 0; i--) {
        while (stack.length > 0 && values[i] >= stack[stack.length - 1]) {
            stack.pop(); // this one is necessary
        }
        if (stack.length === 0) {
            result.push(-1);
            // stack.push(values[i]); // this is not needed, it's in double
        }
        else {
            result.push(stack[stack.length - 1]);
            // stack.push(stack[stack.length-1]); // this is not needed, because it make it as double
        }
        stack.push(values[i]);
    }
    return result.reverse();
}
console.log(nearestGreaterRight([1, 3, 2, 4]));

// Using the Stack => Optimization from O(n^2) to O(n)
let dataSets = [5, 3, 2, 4];
const nearestGreaterLeft = (dataValues) => {
    let result = [];
    let stack = [];
    for (let i = 0; i < dataValues.length; i++) {
        while (stack.length > 0 && dataValues[i] > stack[stack.length - 1]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result.push(-1);
        }
        else {
            result.push(stack[stack.length - 1]);
        }
        stack.push(dataValues[i]);
    }
    return result;
}
console.log(nearestGreaterLeft(dataSets)); // [-1,5,3,5] 