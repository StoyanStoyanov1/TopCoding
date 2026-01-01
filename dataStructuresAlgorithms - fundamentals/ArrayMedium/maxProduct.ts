function maxProduct(nums: number[]): number {
    let res: number = nums[0];
    let min: number = 1;
    let max: number = 1;

    for (const num of nums) {
        const prevMax: number = max;

        max = Math.max(num, num * max, num * min);
        min = Math.min(num, num * prevMax, num * min);
        res = Math.max(res, max);
    }

    return res;
}
