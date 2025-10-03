function heightChecker (heights: number[]): number {
    const sortedHeights: number[] = [...heights].sort((a , b) => a - b);

    return heights.filter((height, index) => height !== sortedHeights[index]).length;
};