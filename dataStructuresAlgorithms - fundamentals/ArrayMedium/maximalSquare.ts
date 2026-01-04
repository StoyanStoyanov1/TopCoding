function maximalSquare(matrix: string[][]): number {
    const memo: Record<string, number> = {};

    function checkSquare(row: number, col: number): number {
        if (row >= matrix.length || col >= matrix[row].length) return 0;

        const key = `[${row}, ${col}]`;
        if (memo[key] !== undefined) {
            return memo[key];
        }

        if (matrix[row][col] === "0") {
            memo[key] = 0;
            return 0;
        }

        memo[key] =
            1 +
            Math.min(
                checkSquare(row + 1, col),
                checkSquare(row, col + 1)
            );

        return memo[key];
    }

    let maxArea: number = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === "1") {
                const currSize = checkSquare(row, col);
                maxArea = Math.max(maxArea, currSize * currSize);
            }
        }
    }

    return maxArea;
}
