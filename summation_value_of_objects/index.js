// Problem Statement: 
// Summation of the objects of Array => let a = [{id: 1, value: 20}, {id: 2, value: 30}, {id: 3, value:70}, {id:1, value: 20}, {id: 3, value: 180}];

// solution 1 with 0(n^2)
let a = [{ id: 1, value: 20 }, { id: 2, value: 30 }, { id: 3, value: 70 }, { id: 1, value: 20 }, { id: 3, value: 180 }];

let result = [];
let matched = false;

function summation() {
    result.push(a[0]);
    for (let i = 1; i < a.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (a[i].id === result[j].id) {
                matched = true;
                result[j].value = result[j].value + a[i].value;
                break;
            }
        }
        if (!matched) {
            result[result.length] = a[i];
        }
    }
    return result;
}

console.log(summation());


// solution 2 with method of jS:

let a = [{ id: 1, value: 20 }, { id: 2, value: 30 }, { id: 3, value: 70 }, { id: 1, value: 20 }, { id: 3, value: 180 }];


function sumOfObject() {
    let result = [];
    a.forEach((dataValue, index) => {
        let myObjIndex = result.findIndex(value => value.id === dataValue.id);
        if (myObjIndex === -1) result.push(dataValue);
        else result[myObjIndex].value += dataValue.value;
    })
    return result;
}

console.log(sumOfObject());
