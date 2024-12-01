const optimizedMultiplyOfProduct = (dataSets) => {
    const result = [];
    let prefixTotal = 1;
    let postfixTotal = 1;

    // Calculate prefix product for result
    for (let i = 0; i < dataSets.length; i++) {
        result[i] = prefixTotal; // Store the prefix product for the current index
        prefixTotal = prefixTotal * dataSets[i]; // Update prefix product
    }

    // Calculate postfix product for result
    for (let i = dataSets.length - 1; i >= 0; i--) {
        result[i] = result[i] * postfixTotal; // Multiply with the postfix product
        postfixTotal = postfixTotal * dataSets[i]; // Update postfix product
    }

    return result;
};

const values = [-1, 1, 0, -3, 3];
console.log(optimizedMultiplyOfProduct(values));