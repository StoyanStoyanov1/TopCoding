function shortestPathBinaryMatrix(grid: number[][]): number {
    const n: number = grid.length;
    const m: number = grid[0].length;

    if (grid[0][0] === 1 || grid[n - 1][m - 1] === 1) return -1;

    const directions: Array<[number, number]> = [
        [1, 0], [-1, 0], [0, 1], [0, -1],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    const queue: Array<[number, number, number]> = [[0, 0, 1]];
    grid[0][0] = 1; // маркираме като посетено

    while (queue.length > 0) {
        const [row, col, path] = queue.shift()!;

        if (row === n - 1 && col === n - 1) return path;

        for (const [dr, dc] of directions) {
            const r: number = row + dr;
            const c: number = col + dc;

            if (r < 0 || r >= n || c < 0 || c >= m || grid[r][c] === 1)
                continue;

            grid[r][c] = 1;
            queue.push([r, c, path + 1]);
        }
    }

    return -1;
}