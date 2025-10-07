function floodFill (image: number[][], sr: number, sc: number, color: number): number[][] {

    const altColor = image[sr][sc];

    if (altColor === color) return image;

    coloring(image, sr, sc, color, altColor);

    return image;
};

function coloring(image: number[][], sr: number, sc: number, newColor: number, altColor: number): number[][] | undefined {
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;

    if (image[sr][sc] !== altColor) return;

     const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    image[sr][sc] = newColor;

    for (const [row, col] of directions) {
        coloring(image, sr + row, sc + col, newColor, altColor);
    }

    return image;
}