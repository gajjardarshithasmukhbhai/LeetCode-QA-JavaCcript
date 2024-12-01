const values = [1, 2, 3, 4];

// brut force O(n^2)
const optimizedMultiplyOfProduct = (dataSets) => {
    let result = [];
    for (let i = 0; i < dataSets.length; i++) {
        result[i] = productOfValues(dataSets.indexOf(dataSets[i]), dataSets);
    }
    return result;
}
const productOfValues = (indexValue, valueSets) => {
    let total = 1;
    for (let i = 0; i < indexValue; i++) {
        total = parseInt(total * valueSets[i]);
    }
    for (let j = valueSets.length - 1; j > indexValue; j--) {
        total = parseInt(total * valueSets[j]);
    }
    return total;
}

console.log(optimizedMultiplyOfProduct(values));