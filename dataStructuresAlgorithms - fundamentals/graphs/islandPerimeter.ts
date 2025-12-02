function islandPerimeter(grid: number[][]): number {
    const dirc: [number, number][] = [
        [0, -1], 
        [-1, 0], 
        [1, 0], 
        [0, 1]
    ];

    const rowLength = grid.length;
    const colLength = grid[0].length;

    let counter = 0;

    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            if (grid[row][col] === 0) continue;

            for (const [r, c] of dirc) {
                const curRow = row + r;
                const curCol = col + c;

                if (
                    !validPosition(curRow, rowLength) ||
                    !validPosition(curCol, colLength) ||
                    grid[curRow][curCol] === 0
                ) {
                    counter++;
                }
            }
        }
    }

    return counter;
}

function validPosition(idx: number, length: number): boolean {
    return idx >= 0 && idx < length;
}
