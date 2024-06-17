// Brut-Force Approach => O(n^2)
const isSquareOrNot = (value) => {
    for (let i = 0; i <= Math.sqrt(value); i++) {
        let total = i * i;
        for (let j = 0; j <= Math.sqrt(value); j++) {
            total = i * i + j * j;
            if (total === value) {
                return true;
            }
        }
    }
    return false;
}

console.log(isSquareOrNot(5));


// Below used the Multiple Pointer Method, Time Complexiety is O(n)
const isSquareOrNot = (value) => {
    // multiple pointer
    let left = 0;
    let right = Math.ceil(Math.sqrt(value));
    while (left <= right) {
        let total = left * left + right * right;
        if (total === value) {
            return true;
        }
        if (total < value) {
            left++;
        }
        if (total > value) {
            right--;
        }
    }
    return false;
}
console.log(isSquareOrNot(2));

// One More Cool Solution with very Optimize Complexiety is in Below(Found from others solution)
const isSquareOrNot = (c) => {
    for (let a = 0; a * a <= c; a++) {
        let b = Math.sqrt(c - a * a);
        if (b === Math.floor(b)) {
            return true;
        }
    }
    return false;
}
console.log(isSquareOrNot(4));