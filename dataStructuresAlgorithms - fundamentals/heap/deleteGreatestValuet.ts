function deleteGreatestValue(grid: number[][]): number {
  grid.forEach((row: number[]) => row.sort((a, b) => b - a));

  let result = 0;

  for (let i = 0; i < grid[0].length; i++) {
    const maxInColumn = Math.max(...grid.map((row) => row[i]));
    result += maxInColumn;
  }

  return result;
}
