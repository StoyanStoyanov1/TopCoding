function isValidSudoku(board: string[][]): boolean {
    const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());

    for (let row = 0; row < board.length; row++) {
        const rowSet: Set<string> = new Set();
        const colSet: Set<string> = new Set();

        for (let col = 0; col < board[row].length; col++) {
            const rowValue: string = board[row][col];
            const boxIndex: number = Math.floor(row / 3) * 3 + Math.floor(col / 3);
            const boxSet: Set<string> = boxes[boxIndex];

            if (rowValue !== ".") {
                if (rowSet.has(rowValue) || boxSet.has(rowValue)) return false;
                rowSet.add(rowValue);
                boxSet.add(rowValue);
            }

            if (row !== col) {
                const colValue: string = board[col][row];

                if (colValue !== ".") {
                    if (colSet.has(colValue)) return false;
                    colSet.add(colValue);
                }
            }
        }
    }

    return true;
}
