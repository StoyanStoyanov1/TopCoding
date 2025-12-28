function searchMatrix(matrix: number[][], target: number): boolean {
    let row: number = 0;
    let col: number = matrix[0].length - 1;
    let isInCurRow: boolean = false;

    while (row < matrix.length && col >= 0) {
        const curNum: number = matrix[row][col];

        if (curNum === target) return true;

        if (!isInCurRow && curNum > target) isInCurRow = true;

        if (isInCurRow) col--;
        else row++;
    }

    return false;
}
