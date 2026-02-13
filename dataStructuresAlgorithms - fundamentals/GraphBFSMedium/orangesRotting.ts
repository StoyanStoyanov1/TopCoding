function orangesRotting(grid: number[][]): number {
    const n: number = grid.length;
    const m: number = grid[0].length;

    const queue: Array<[number, number]> = [];
    let fresh: number = 0;
    let minutes: number = 0;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (grid[row][col] === 2) queue.push([row, col]);
            if (grid[row][col] === 1) fresh++;
        }
    }

    const dirs: Array<[number, number]> = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];

    while (queue.length > 0 && fresh > 0) {
        let size: number = queue.length;

        while (size-- > 0) {
            const [row, col] = queue.shift()!;

            for (const [dr, dc] of dirs) {
                const cr: number = row + dr;
                const cc: number = col + dc;

                if (cr < 0 || cr >= n || cc < 0 || cc >= m || grid[cr][cc] !== 1)
                    continue;

                grid[cr][cc] = 2;
                fresh--;
                queue.push([cr, cc]);
            }
        }

        minutes++;
    }

    return fresh === 0 ? minutes : -1;
}