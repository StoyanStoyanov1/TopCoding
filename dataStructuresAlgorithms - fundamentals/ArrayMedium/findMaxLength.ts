function findMaxLength(nums: number[]): number {
    const numsMap = new Map<number, number>();
    numsMap.set(0, -1);

    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;

        if (numsMap.has(sum)) {
            maxLen = Math.max(maxLen, i - numsMap.get(sum)!);
        } else {
            numsMap.set(sum, i);
        }
    }

    return maxLen;
}