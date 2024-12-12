
const pickGifts = (gifts, k) => {
    let result = 0;
    for (let i = k; i > 0; i--) {
        let maxIndex = gifts.indexOf(Math.max(...gifts));
        gifts[maxIndex] = gifts[maxIndex] - (gifts[maxIndex] - Math.floor(Math.sqrt(gifts[maxIndex])));
    }

    for (let value of gifts) {
        result += value;
    }
    return result;
};