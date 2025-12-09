function generate2(rowIndex: number): number[] {
    if (rowIndex === 0) return [1];

    const triangle: number[][] = [[1], [1, 1]];

    for (let i = 2; i <= rowIndex; i++) {
        const prev = triangle[triangle.length - 1];
        const row: number[] = Array(i + 1).fill(0);

        row[0] = 1;
        row[row.length - 1] = 1;

        for (let j = 1; j < row.length - 1; j++) {
            row[j] = prev[j - 1] + prev[j];
        }

        triangle.push(row);
    }

    return triangle[rowIndex];
}
