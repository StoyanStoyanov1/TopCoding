function numIslands(grid: string[][]): number {
    const n: number = grid.length;
    const m: number = grid[0].length;

    const directions: Array<[number, number]> = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
    ];

    let islands = 0;

    function dfs(r: number, c: number): void {
        if (
            r < 0 ||
            r >= n ||
            c < 0 ||
            c >= m ||
            grid[r][c] === "0"
        ) {
            return;
        }

        grid[r][c] = "0";

        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    }

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (grid[row][col] === "1") {
                islands++;
                dfs(row, col);
            }
        }
    }

    return islands;
}