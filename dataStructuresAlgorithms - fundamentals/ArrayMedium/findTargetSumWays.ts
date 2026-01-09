function findTargetSumWays(nums: number[], target: number): number {
    let count = 0;

    function backtrack(i: number = 0, sum: number = 0): void {
        if (i === nums.length) {
            if (sum === target) count++;
            return;
        }

        const num = nums[i];

        backtrack(i + 1, sum + num);
        backtrack(i + 1, sum - num);
    }

    backtrack();

    return count;
}