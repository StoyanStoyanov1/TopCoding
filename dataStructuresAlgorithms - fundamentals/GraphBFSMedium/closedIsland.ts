function closedIsland(grid: number[][]): number {
    const n: number = grid.length;
    const m: number = grid[0].length;
    let closedIslandCount: number = 0;

    const dirc: Array<[number, number]> = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    for (let row = 1; row < n - 1; row++) {
        for (let col = 1; col < m - 1; col++) {
            if (grid[row][col] === 0) {
                if (bfs(row, col, grid, dirc, n, m)) {
                    closedIslandCount++;
                }
            }
        }
    }

    return closedIslandCount;
}

function bfs(
    r: number,
    c: number,
    grid: number[][],
    dirc: Array<[number, number]>,
    n: number,
    m: number
): boolean {
    const queue: Array<[number, number]> = [[r, c]];

    while (queue.length > 0) {
        const [row, col] = queue.pop()!;
        grid[row][col] = 1;

        for (const [dr, dc] of dirc) {
            const newR: number = row + dr;
            const newC: number = col + dc;

            if (newR < 0 || newR >= n || newC < 0 || newC >= m) {
                return false;
            }

            if (grid[newR][newC] === 0) {
                queue.push([newR, newC]);
            }
        }
    }

    return true;
}