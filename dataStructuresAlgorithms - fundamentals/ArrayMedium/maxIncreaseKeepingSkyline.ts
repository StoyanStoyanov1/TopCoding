function maxIncreaseKeepingSkyline(grid: number[][]): number {
    const n: number = grid.length;
    const m: number = grid[0].length;
    const maxRow: number[] = Array(n).fill(0);
    const maxCol: number[] = Array(m).fill(0);

    let max: number = 0;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            const value: number = grid[row][col];

            if (value > maxRow[row]) maxRow[row] = value;
            if (value > maxCol[col]) maxCol[col] = value;
        }
    }

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            max += Math.min(maxRow[row], maxCol[col]) - grid[row][col];
        }
    }

    return max;
}
