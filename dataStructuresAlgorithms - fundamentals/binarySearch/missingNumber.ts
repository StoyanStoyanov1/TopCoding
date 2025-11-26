function missingNumber(nums: number[]): number {
    return nums.reduce((acu, num, idx) => acu + idx - num, nums.length);
}
