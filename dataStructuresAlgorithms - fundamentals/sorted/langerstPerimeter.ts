function langerstPerimeter(nums: number[]): number{
    const sortedNums: number[] = nums.sort((a, b) => b - a);
    let langerstPerimeter: number = 0;

    if (nums.length < 3) return langerstPerimeter;

    for (let i = 0; i <= sortedNums.length - 3; i++) {
        const [a, b, c] = [sortedNums[i], sortedNums[i + 1], sortedNums[i + 2]];
        if (b + c > a) {
            const perimeter = a + b + c;
            langerstPerimeter = perimeter > langerstPerimeter ? perimeter : langerstPerimeter;
        }
    }

    return langerstPerimeter;
}