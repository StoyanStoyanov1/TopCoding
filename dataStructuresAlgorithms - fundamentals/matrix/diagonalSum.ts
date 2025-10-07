function diagonalSum(mat: number[][]): number {
    const matrixLength: number = mat.length;
    let sum:number = 0;
    let y = matrixLength - 1;

    for (let i = 0; i < matrixLength; i++) {
        sum += mat[i][i];

        if (i !== y) {
            sum += mat[y][i]
        } 

        y--;
    }

    return sum;
};