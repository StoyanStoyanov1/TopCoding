function deleteAndEarn(nums: number[]): number {
    const maxNum: number = Math.max(...nums);
    const dp: number[] = Array(maxNum + 1).fill(0);

    for (const num of nums) {
        dp[num] += num;
    }

    let firstPrev: number = 0;
    let secondPrev: number = 0;

    for (let i = 0; i < dp.length; i++) {
        const curr: number = Math.max(secondPrev, firstPrev + dp[i]);
        firstPrev = secondPrev;
        secondPrev = curr;
    }

    return secondPrev;
}
