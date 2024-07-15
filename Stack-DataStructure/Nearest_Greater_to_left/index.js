// Brute Force Approach
const myValues = [4,2,3,4];

const nearestGreaterLeft = (myValues) => {
    let result = [];
    for(let i=0;i<myValues.length;i++) {
        let isFound = false;
        let index = 0;
        while(index < myValues.indexOf(myValues[i])) {
            if(myValues[i] < myValues[index]) {
                result.push(myValues[index]);
                isFound = true;
                break;
            }
            index++;
        }
        // Below is common pattern for founding the value and pushing
        if(!isFound) {
            result.push(-1);
        }
    }
    return result;
}
console.log(nearestGreaterLeft(myValues));

// stack Implememtation

