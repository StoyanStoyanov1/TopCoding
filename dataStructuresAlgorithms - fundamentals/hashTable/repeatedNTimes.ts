function repeatedNTimes(nums: number[]): number | undefined {
    const numsSet = new Set<number>();

    while (nums.length) {
        const curNum = nums.pop()!;
        if (numsSet.has(curNum)) return curNum;
        numsSet.add(curNum);
    }

    return undefined;
}
