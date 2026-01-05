function findDuplicate(nums: number[]): number {
    const numsSet = new Set<number>();

    for (const num of nums) {
        if (numsSet.has(num)) return num;
        numsSet.add(num);
    }

    return -1;
}
