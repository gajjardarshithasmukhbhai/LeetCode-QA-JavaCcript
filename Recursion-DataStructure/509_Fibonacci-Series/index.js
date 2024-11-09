// more Time Complexity O(2^n) Not O(N)
let number = 7;
let value = 0;
const fib = (valueToStop) => {
    if (valueToStop === 0 || valueToStop === 1) {
        return valueToStop;
    }
    return fib(valueToStop - 1) + fib(valueToStop - 2);
}
console.log(fib(4));

// with O(N), here we used the Dynamic Programming with momenixation
let number = 7;
let value = 0;
const fib = (valueToStop, memo = {}) => {
    if (valueToStop === 0 || valueToStop === 1) {
        return valueToStop;
    }
    if (memo[valueToStop]) {
        return memo[valueToStop]
    }
    memo[valueToStop] = fib(valueToStop - 1, memo) + fib(valueToStop - 2, memo);
    return memo[valueToStop]
}
console.log(fib(3));