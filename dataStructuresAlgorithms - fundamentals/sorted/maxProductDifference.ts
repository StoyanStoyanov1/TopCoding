function maxProductDifference(nums: number[]): number {
    const maxNumbers: number[] = [];
    const minNumbers: number[] = [];

    for (let c = 1; c <= 4; c++) {
        let currentNum: number;

        if (c <= 2) {
            currentNum = Math.max(...nums);
            maxNumbers.push(currentNum);
        }
        else {
            currentNum = Math.min(...nums);
            minNumbers.push(currentNum);
        };

        const indexOfCurrentNum: number = nums.indexOf(currentNum);

        nums.splice(indexOfCurrentNum, 1);

    }

    const difference = multiply(maxNumbers) - multiply(minNumbers);

    return difference;
};


function multiply(nums: number[]): number {
    return nums.reduce((a, b) => a * b, 1);
}