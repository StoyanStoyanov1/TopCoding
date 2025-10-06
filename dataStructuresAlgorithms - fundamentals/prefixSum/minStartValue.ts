function minStartValue(nums: number[]): number {
    if (nums.length === 0) return 0;

    let sum: number = 0;
    let minSum: number = Infinity;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        minSum = Math.min(sum, minSum);
    }

    return Math.max(1, 1 - minSum);
};