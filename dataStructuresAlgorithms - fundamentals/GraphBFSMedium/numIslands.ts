function numIslands(grid: string[][]): number {
    const n: number = grid.length;
    const m: number = grid[0].length;

    const dirc: number[][] = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    let islands: number = 0;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (grid[row][col] === "1") {
                islands++;

                const stack: [number, number][] = [[row, col]];

                while (stack.length) {
                    const [r, c] = stack.pop()!;

                    grid[r][c] = "0";

                    for (const [dr, dc] of dirc) {
                        const nr = r + dr;
                        const nc = c + dc;

                        if (
                            nr < 0 || nr >= n ||
                            nc < 0 || nc >= m ||
                            grid[nr][nc] === "0"
                        ) continue;

                        stack.push([nr, nc]);
                    }
                }
            }
        }
    }

    return islands;
}