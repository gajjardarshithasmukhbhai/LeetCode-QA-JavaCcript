const numberOfPoints = (nums) => {
    const events = [];
    for (let [start, end] of nums) {
        events.push([start, 1]);
        events.push([end + 1, -1])
    }

    events.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    })

    let total_points = 0;
    let prev_position = null;
    let active_intervals = 0;

    for (const [position, event_type] of events) {
        if (prev_position !== null && active_intervals > 0) {
            total_points += position - prev_position;
        }

        active_intervals += event_type;
        prev_position = position;
    }
    return total_points;
};

console.log(numberOfPoints([[3, 6], [1, 5], [4, 7]]));