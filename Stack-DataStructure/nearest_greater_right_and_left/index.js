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
        while (stack.length > 0 && dataValues[i] >= stack[stack.length - 1]) {
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


// 739. Daily Temperatures
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.


// approach:
// In nearest Greatest right we checked, but we need to count the number. How it far away from the Greatest values. so for that we push indices or index number. that goes in stack from Descending order(Hight --> Low). from index we are doing value comparison and push the index rather than value
// basically above we check the value either it's greater or not. but if we applied here. it not give the efficient indices

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (tempValues) {
    const stack = [];
    const result = new Array(tempValues.length).fill(0);
    let countOfDays = 0;
    for (let i = tempValues.length - 1; i >= 0; i--) {
        countOfDays = 0;
        while (stack.length > 0 && tempValues[i] >= tempValues[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1] - i;
        }
        stack.push(i);
    }
    return result;
};


// Brute Force Approach of Greatest
const myValues = [4, 2, 3, 4];

const nearestGreaterLeft = (myValues) => {
    let result = [];
    for (let i = 0; i < myValues.length; i++) {
        let isFound = false;
        let index = 0;
        while (index < myValues.indexOf(myValues[i])) {
            if (myValues[i] < myValues[index]) {
                result.push(myValues[index]);
                isFound = true;
                break;
            }
            index++;
        }
        // Below is common pattern for founding the value and pushing
        if (!isFound) {
            result.push(-1);
        }
    }
    return result;
}
console.log(nearestGreaterLeft(myValues));