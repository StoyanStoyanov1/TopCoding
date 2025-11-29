function countNegatives(grid: number[][]): number {
    let count = 0;

    for (const row of grid) {
        let left = 0;
        let right = row.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (row[mid] >= 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        count += row.length - left;
    }

    return count;
}
