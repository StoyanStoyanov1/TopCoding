function numSpecial(mat: number[][]): number {
    let result: number = 0;

    const dirc: number[][] = [
        [-1, 0], [1, 0],
        [0, 1], [0, -1],
    ]

    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[0].length; c++) {
            if (mat[r][c] === 1) {
                let isSpecial: boolean = true;

                for (const [row, col] of dirc) {
                    let curRow: number = r + row;
                    let curCol: number = c + col;

                    if (!isSpecial) break;

                    while (curRow >= 0 && curRow < mat.length && curCol >= 0 && curCol < mat[0].length) {
                        if (mat[curRow][curCol] === 1) {
                            isSpecial = false;
                            break;
                        }

                        curRow += row;
                        curCol += col;
                    }
                }

                if (isSpecial) result++;
            }
        }
    }

    return result;
    
};