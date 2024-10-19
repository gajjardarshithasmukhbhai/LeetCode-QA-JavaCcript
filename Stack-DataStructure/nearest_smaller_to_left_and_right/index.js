// stock span problems 
let nslValues = [4, 5, 2, 10, 8];
// O/P => [ -1, 4, -1, 2, 2 ]
// Time Complexity => O(n)
// Space Complexity => O(n)

// explanation: from 4 => Left Side nothing => -1
// explanation: from 5 => Left Side => 4 => so it come
// explanation: from 2 => Left Side => nothing => -1
// explanation: from 10 => Left Side => 2
// explanation: from 8 => Left Side => 2
function nearestSmallerLeftValue(values) {
    let stack = [];
    let result = [];
    for (let i = 0; i < values.length; i++) {
        while (stack.length > 0 && values[i] < stack[stack.length - 1]) {
            stack.pop()
        }
        if (stack.length === 0) {
            result.push(-1)
        }
        else {
            result.push(stack[stack.length - 1]);
        }
        stack.push(values[i]);
    }
    return result;
}

console.log(nearestSmallerLeftValue(nslValues));