function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);

    let maxLen: number = 1;
    let currLen: number = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        if (nums[i] === nums[i - 1] + 1) {
            currLen++;
        } else {
            maxLen = Math.max(maxLen, currLen);
            currLen = 1;
        }
    }

    return Math.max(maxLen, currLen);
}
