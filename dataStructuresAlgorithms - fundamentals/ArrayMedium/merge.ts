function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];

    intervals.sort((a: number[], b: number[]) => a[0] - b[0]);

    const result: number[][] = [];
    let prev: number[] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const start: number = intervals[i][0];
        const end: number = intervals[i][1];

        if (start > prev[1]) {
            result.push(prev);
            prev = [start, end];
        } else {
            prev[1] = Math.max(prev[1], end);
        }
    }

    result.push(prev);
    return result;
}
