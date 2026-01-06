function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length === 0) return 0;

    intervals.sort((a, b) => a[1] - b[1]);

    let removed: number = 0;
    let prevEnd: number = intervals[0][1];

    for (const [start, end] of intervals.slice(1)) {
        if (start >= prevEnd) {
            prevEnd = end;
        } else {
            removed++;
        }
    }

    return removed;
}
