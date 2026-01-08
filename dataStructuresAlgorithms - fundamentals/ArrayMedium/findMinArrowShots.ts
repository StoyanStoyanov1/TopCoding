function findMinArrowShots(points: number[][]): number {
    if (points.length === 0) return 0;

    points.sort((a: number[], b: number[]) => a[1] - b[1]);

    let arrows: number = 1;
    let currentEnd: number = points[0][1];

    for (let i = 1; i < points.length; i++) {
        const [start, end]: number[] = points[i];

        if (start > currentEnd) {
            arrows++;
            currentEnd = end;
        }
    }

    return arrows;
}
