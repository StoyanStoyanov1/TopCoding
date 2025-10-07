function largestLocal(grid: number[][]): number[][] {
    const newMatrix: number[][] = [];

    for (let r = 0; r < grid.length - 2; r++) {
        const row: number[] = []
        for (let c = 0; c < grid[0].length - 2; c++) {
            const subGrid: number[][] = grid.slice(r, r + 3).map(row => row.slice(c, c + 3)); 
            const maxNum: number = Math.max(...subGrid.map(s => Math.max(...s)));

            row.push(maxNum);

        }   

        newMatrix.push(row);
    }

    return newMatrix;
};