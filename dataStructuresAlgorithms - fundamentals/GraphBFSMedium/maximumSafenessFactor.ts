function maximumSafenessFactor(grid: number[][]): number {
    const n: number = grid.length;

    const directions: Array<[number, number]> = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];

    const dist: number[][] =
        Array.from({ length: n }, () => new Array(n).fill(Infinity));

    const queue: Array<[number, number]> = [];

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                dist[r][c] = 0;
                queue.push([r, c]);
            }
        }
    }

    while (queue.length > 0) {
        const [r, c] = queue.shift()!;

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 &&
                nr < n &&
                nc >= 0 &&
                nc < n &&
                dist[nr][nc] === Infinity
            ) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    const pq: Array<[number, number, number]> = [[dist[0][0], 0, 0]];
    const visited: Set<string> = new Set();

    while (pq.length > 0) {
        pq.sort((a, b) => b[0] - a[0]); // най-голямата safe стойност отпред
        const [safe, r, c] = pq.shift()!;

        if (r === n - 1 && c === n - 1) return safe;

        const key = `${r},${c}`;
        if (visited.has(key)) continue;
        visited.add(key);

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            const nextKey = `${nr},${nc}`;

            if (
                nr >= 0 &&
                nr < n &&
                nc >= 0 &&
                nc < n &&
                !visited.has(nextKey)
            ) {
                pq.push([Math.min(safe, dist[nr][nc]), nr, nc]);
            }
        }
    }

    return 0;
}