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