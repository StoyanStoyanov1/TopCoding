function removeStones(stones: number[][]): number {
    const visited: Set<string> = new Set();
    let count = 0;

    for (const [row, col] of stones) {
        const currPosition = `${row},${col}`;
        if (!visited.has(currPosition)) {
            visited.add(currPosition);
            bfs(row, col, stones, visited);
            count++;
        }
    }

    return stones.length - count;
}

function bfs(
    row: number,
    col: number,
    stones: number[][],
    visited: Set<string>
): void {
    const queue: Array<[number, number]> = [[row, col]];

    while (queue.length > 0) {
        const [stoneRow, stoneCol] = queue.pop()!;

        for (const [sr, sc] of stones) {
            const currPosition = `${sr},${sc}`;
            if (!visited.has(currPosition) && (sr === stoneRow || sc === stoneCol)) {
                visited.add(currPosition);
                queue.push([sr, sc]);
            }
        }
    }
}