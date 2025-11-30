function maximumCount(nums: number[]): number {
    const negatives = nums.filter(num => num < 0).length;
    const positives = nums.filter(num => num > 0).length;

    return Math.max(negatives, positives);
}
