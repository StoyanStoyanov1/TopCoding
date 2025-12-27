function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let count: number = 0;
    const rowN: number = obstacleGrid.length;
    const colN: number = obstacleGrid[0].length;

    const findPath = (row: number, col: number): void => {
        if (row < 0 || row >= rowN || col < 0 || col >= colN) {
            return;
        }

        if (obstacleGrid[row][col] === 1) {
            return;
        }

        if (row === rowN - 1 && col === colN - 1) {
            count++;
            return;
        }

        findPath(row + 1, col);
        findPath(row, col + 1);
    };

    findPath(0, 0);
    return count;
}
