class NumArray {
    sums: number[]

    constructor(nums: number[]) {
        this.sums = new Array(nums.length).fill(0);
        this.sums[0] = nums[0];

        for (let i = 1; i < nums.length; i++) {
            this.sums[i] += nums[i] + this.sums[i - 1];
        }
    }

    sumRange(left: number, right: number): number {
        if (left === 0) return this.sums[right];
        return this.sums[right] - this.sums[left - 1];
    }
}