function generate(numRows: number): number[][] {
    if (numRows <= 1) return numRows ? [[1]] : [];

    const result: number[][] = [[1], [1, 1]];

    for (let i = 3; i <= numRows; i++) {
        const prev = result[result.length - 1];
        const row: number[] = new Array(prev.length + 1).fill(0);

        row[0] = 1;
        row[row.length - 1] = 1;

        for (let j = 1; j < row.length - 1; j++) {
            row[j] = prev[j - 1] + prev[j];
        }

        result.push(row);
    }

    return result;
}
