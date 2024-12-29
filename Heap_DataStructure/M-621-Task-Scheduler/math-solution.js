const leastInterval = (tasks, n) => {
    const countChar = new Map();
    let maxValue = 0;
    let result = 0;
    for (let i = 0; i < tasks.length; i++) {
        countChar.set(tasks[i], (countChar.get(tasks[i]) || 0) + 1);
        maxValue = Math.max(maxValue, countChar.get(tasks[i]));
    }


    let maxCount = 0;
    for (let value of countChar) {
        if (value[1] === maxValue) {
            maxCount++;
        }
    }
    return Math.max(tasks.length, (maxValue - 1) * (n + 1) + maxCount);
};

// Formula understanding
// A A A B B

// A,_,_,A,_,_A

// 3-1 = [2]
// 2+1 = 3
