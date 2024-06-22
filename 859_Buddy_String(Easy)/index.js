// Learn from Below code:
// 1. through set we can easily differentiat the value is aa or ab. no need to check loop for that

// Below code one by one character we are comparing with the new string, and one time we are swaping
// ,multiple time swaping is not allowed 
// Time Complexity => O(n)

let s = "aaaaaaabc";
let goal = "aaaaaaacb";

// approach-1 NOt ACCEPTABLE APPROACH kEEP IN mIND dARSHIt
const buddyStrings = function (s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    // new concept learn like aa == aa or ab=ab to compare simple and sweet
    if (s === goal) {
        const value = new Set(s.split(''));
        return value.size < s.length;
    }
    else {
        let diff = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== goal[i]) {
                diff.push([s[i], goal[i]]);
            }
        }
        return diff.length === 2 && diff[0].reverse().join('') === diff[1].join('');
    }
};
console.log(buddyStrings(s, goal));