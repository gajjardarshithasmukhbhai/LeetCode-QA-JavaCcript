let stockSpanNumbers = [100, 80, 60, 70, 60, 75, 85];
function consecutiveStockNumbers(stockesValues) {
    let stack = [];
    let values = [];
    let finalResult = [];
    for (let i = 0; i < stockesValues.length; i++) {
        while (stockesValues.length > 0 && stockesValues[i] >= stockesValues[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length === 0) {
            values[i] = -1;
        }
        else {
            values[i] = stack[stack.length - 1]
        }
        stack.push(i)
    }
    console.log('values: ', values);
    for (let i = 0; i < values.length; i++) {
        finalResult[i] = i - (values[i]);
    }
    return finalResult;
}
console.log(consecutiveStockNumbers(stockSpanNumbers));


// Second Approach:

let stockSpanNumbers = [100, 80, 60, 70, 60, 75, 85];
function consecutiveStockNumbers(stockesValues) {
    let stack = [];
    let spanResult = [];
    for (let i = 0; i < stockesValues.length; i++) {
        let span = 1;
        while (stack.length > 0 && stockesValues[i] >= stack[stack.length - 1][0]) {
            span = span + stack[stack.length - 1][1];
            stack.pop();
        }
        stack.push([stockesValues[i], span])
        spanResult.push(span)
    }
    return spanResult;
}
console.log(consecutiveStockNumbers(stockSpanNumbers));


