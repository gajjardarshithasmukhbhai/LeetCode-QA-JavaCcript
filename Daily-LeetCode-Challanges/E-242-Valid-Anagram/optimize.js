let s = "a", t = "ab"
const isAnagram = (s, t) => {
    let sFreq = new Map();
    let tFreq = new Map();

    if (s.length !== t.length) {
        return false;
    } else {
        for (let value of s) {
            sFreq = sFreq.set(value, (sFreq.get(value) || 0) + 1);
        }
        for (let value of t) {
            tFreq = tFreq.set(value, (tFreq.get(value) || 0) + 1);
        }
        for (let value of sFreq) {
            if (tFreq.get(value[0]) !== sFreq.get(value[0])) return false;
        }
    }
    return true;
}
console.log(isAnagram(s, t));