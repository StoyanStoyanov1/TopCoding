function maxAreaOfIsland(grid: number[][]): number {
    const n: number = grid.length;
    const m: number = grid[0].length;

    let maxArea: number = 0;
    let currArea: number = 0;

    const dfs = (row: number, col: number): void => {
        if (
            row < 0 || row >= n ||
            col < 0 || col >= m ||
            grid[row][col] === 0
        ) return;

        currArea++;
        grid[row][col] = 0;

        dfs(row + 1, col);
        dfs(row, col + 1);
        dfs(row - 1, col);
        dfs(row, col - 1);
    };

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (grid[row][col] === 1) {
                dfs(row, col);
                maxArea = Math.max(maxArea, currArea);
                currArea = 0;
            }
        }
    }

    return maxArea;
}