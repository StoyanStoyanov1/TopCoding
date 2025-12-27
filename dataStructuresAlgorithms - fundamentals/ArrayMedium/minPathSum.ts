function minPathSum(grid: number[][]): number {
    const rows: number = grid.length;
    const cols: number = grid[0].length;

    const res: number[][] = Array.from(
        { length: rows + 1 },
        () => Array(cols + 1).fill(Infinity)
    );

    res[rows - 1][cols] = 0;
    res[rows][cols - 1] = 0;

    for (let r = rows - 1; r >= 0; r--) {
        for (let c = cols - 1; c >= 0; c--) {
            res[r][c] = grid[r][c] + Math.min(res[r + 1][c], res[r][c + 1]);
        }
    }

    return res[0][0];
}
