function luckyNumbers(matrix: number[][]): number[] {
    const result: number[] = [];

    for (let r = 0; r < matrix.length; r++) {
        let minRow: number = Math.min(...matrix[r]);
        let col: number = matrix[r].indexOf(minRow);

        let maxCol: number = -Infinity;
        for (let i = 0; i < matrix.length; i++) {
            maxCol = Math.max(matrix[i][col], maxCol);
        }

        if (minRow === maxCol) result.push(maxCol);
    }

    return result;
    
};