function findDuplicates(nums: number[]): number[] {
    const numsMap: Map<number, number> = new Map();

    nums.forEach((num: number) => {
        numsMap.set(num, (numsMap.get(num) || 0) + 1);
    });

    const arr: number[] = [];

    for (const [key, value] of numsMap) {
        if (value > 1) {
            arr.push(key);
        }
    }

    return arr;
}
