function subarraySum(nums: number[], k: number): number {
    let count = 0;
    let sum = 0;
    const numsMap = new Map<number, number>();
    numsMap.set(0, 1);

    for (const num of nums) {
        sum += num;

        if (numsMap.has(sum - k)) count += numsMap.get(sum - k)!;

        numsMap.set(sum, (numsMap.get(sum) || 0) + 1);
    }

    return count;
}