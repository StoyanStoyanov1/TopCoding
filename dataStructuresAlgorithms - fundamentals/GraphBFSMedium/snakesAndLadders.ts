function snakesAndLadders(board: number[][]): number {
    const n: number = board.length;
    const nsq: number = n ** 2;

    const queue: Array<[number, number, boolean]> = [[1, 0, false]];
    const visited: boolean[] = new Array(nsq + 1).fill(false);
    visited[1] = true;

    let head = 0;

    while (head < queue.length) {
        const [node, path, lastMove] = queue[head++];

        if (node === nsq) return path;

        for (let i = node + 1; i <= Math.min(node + 6, nsq); i++) {
            if (visited[i]) continue;

            const [row, col] = getPosition(i, n);

            if (board[row][col] === -1 || lastMove) {
                queue.push([i, path + 1, false]);
            } else {
                queue.push([board[row][col], path + 1, true]);
            }

            visited[i] = true;
        }
    }

    return -1;
}

function getPosition(node: number, n: number): [number, number] {
    const curr: number = Math.floor((node - 1) / n);
    const row: number = n - curr - 1;
    let col: number = (node - 1) % n;

    if (curr % 2 === 1) col = n - col - 1;

    return [row, col];
}