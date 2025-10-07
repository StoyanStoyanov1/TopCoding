function transpose(matrix: number[][]): number[][] {
    const newMatrix: number[][] = [];

    for (let col = 0; col < matrix[0].length; col++ ) {
        const newRow: number[] = [];
        for (let row = 0; row < matrix.length; row++) {
            newRow.push(matrix[row][col]);
        } 

        newMatrix.push(newRow);
    }

    return newMatrix;
    
};