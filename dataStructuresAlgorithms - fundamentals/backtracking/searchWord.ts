function exist(board: string[][], word: string): boolean {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] !== word[0]) continue;

            if (searchWord(board, word, row, col)) return true;
        }
    }

    return false;
}

function searchWord(
    board: string[][],
    word: string,
    row: number,
    col: number,
    visited: Set<string> = new Set(),
    idx: number = 0
): boolean {
    if (idx === word.length) return true;

    if (
        row < 0 ||
        row >= board.length ||
        col < 0 ||
        col >= board[0].length
    ) return false;

    if (board[row][col] !== word[idx]) return false;

    const path = `${row},${col}`;

    if (visited.has(path)) return false;

    visited.add(path);

    const right = searchWord(board, word, row, col + 1, visited, idx + 1);
    const left = searchWord(board, word, row, col - 1, visited, idx + 1);
    const up = searchWord(board, word, row - 1, col, visited, idx + 1);
    const down = searchWord(board, word, row + 1, col, visited, idx + 1);

    visited.delete(path);

    return right || left || up || down;
}

export { exist };
