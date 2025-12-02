function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const startColor = image[sr][sc];
    if (startColor === color) return image;
    return coloring(image, sr, sc, color, startColor);
}

function coloring(image: number[][], sr: number, sc: number, color: number, startColor: number): number[][] {
    const dirc: [number, number][] = [
        [0, 1], [1, 0],
        [-1, 0], [0, -1],
    ];

    image[sr][sc] = color;

    for (const [rowOffset, colOffset] of dirc) {
        const curRow = sr + rowOffset;
        const curCol = sc + colOffset;

        const rowInRange = curRow >= 0 && curRow < image.length;
        const colInRange = curCol >= 0 && curCol < image[0].length;

        if (rowInRange && colInRange && image[curRow][curCol] === startColor) {
            coloring(image, curRow, curCol, color, startColor);
        }
    }

    return image;
}
