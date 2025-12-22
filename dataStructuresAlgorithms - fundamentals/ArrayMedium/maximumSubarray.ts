const maxSubArray = (nums: number[]): number => {
    let total: number = 0;
    let maxSum: number = -Infinity;

    for (const num of nums) {
        total += num;
        maxSum = Math.max(total, maxSum);

        if (total < 0) total = 0;
    }

    return maxSum;
};
