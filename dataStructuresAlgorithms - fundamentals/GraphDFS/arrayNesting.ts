function arrayNesting(nums: number[]): number {
    const numsSet: Set<number> = new Set();

    let longestLength: number = 0;

    const dfs = (i: number): void => {
        const num = nums[i];

        if (numsSet.has(num)) {
            longestLength = Math.max(numsSet.size, longestLength);
            numsSet.clear();
            return;
        }

        numsSet.add(num);

        dfs(num);
    };

    for (let i = 0; i < nums.length; i++) {
        dfs(i);
    }

    return longestLength;
}