const events = [[1, 5, 3], [1, 5, 1], [6, 6, 5]]
const maxTwoEvents = (events) => {
    const sortValue = events.sort((a, b) => (a[0] - b[0]));
    console.log('sortValue: ', sortValue);

    let max = 0;
    for (let i = 0; i < events.length - 1; i++) {
        for (let j = i + 1; j < events.length; j++) {
            if (events[i][1] < events[j][0]) {
                max = Math.max(max, events[i][2] + events[j][2]);
            }
        }
    }

    // for single event is present
    for (let event of events) {
        max = Math.max(max, event[2]);
    }
    return max;
};

console.log(maxTwoEvents(events));