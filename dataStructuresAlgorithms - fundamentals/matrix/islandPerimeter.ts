function islandPerimeter(grid: number[][]): number {
    const directions: number[][] = [
        [0, -1], [0, 1], [-1, 0], [1, 0],
    ]

    let counter = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 0) continue;

            for (const [r, c] of directions) {
                const curRow: number = row + r;
                const curCol: number = col + c;
                const rowIsValid: boolean = curRow >= 0 && curRow < grid.length;
                const colIsValid: boolean = curCol >= 0 && curCol < grid[0].length;

                if (!rowIsValid || !colIsValid || grid[curRow][curCol] === 0) counter++;
            }
        }
    }

    return counter;
}