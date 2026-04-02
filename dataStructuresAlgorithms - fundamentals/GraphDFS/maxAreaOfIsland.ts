function maxAreaOfIsland(grid: number[][]): number {
    const n: number = grid.length;
    const m: number = grid[0].length;

    const visited: Set<string> = new Set();
    const dirs: number[][] = [[0,1],[1,0],[-1,0],[0,-1]];

    const dfs = (row: number, col: number): number => {
        const key = `${row},${col}`;

        if (
            row < 0 || row >= n ||
            col < 0 || col >= m ||
            grid[row][col] === 0 ||
            visited.has(key)
        ) return 0;

        visited.add(key);

        let area: number = 1;

        for (const [dr, dc] of dirs) {
            area += dfs(row + dr, col + dc);
        }

        return area;
    };

    let maxArea: number = 0;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (grid[row][col] === 0 || visited.has(`${row},${col}`)) continue;

            maxArea = Math.max(maxArea, dfs(row, col));
        }
    }

    return maxArea;
}