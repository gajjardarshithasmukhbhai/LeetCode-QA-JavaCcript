let decodeAtIndex = (s, k) => {
    let totalSize = 0;
    let size = 0;
    let i = 0;

    while (totalSize < k) {
        if (!isNaN(s[i])) {
            totalSize *= Number(s[i]);
        } else {
            totalSize++;
        }
        i++;
    }

    for (let j = i - 1; j >= 0; j--) {
        if (!isNaN(s[j])) {
            totalSize = totalSize / Number(s[j]);
            k = k % totalSize;
        }
        else {
            if (k === 0 || k === totalSize) {
                return s[j];
            }
            totalSize--;
        }
    }
    return "";
}
console.log(decodeAtIndex("ab23", 12));