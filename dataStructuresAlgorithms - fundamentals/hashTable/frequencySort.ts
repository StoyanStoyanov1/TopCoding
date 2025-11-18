function frequencySort(nums: number[]): number[] {
    const numsMap: Map<number, number> = new Map();
    const result: number[] = [];

    for (const num of nums) {
        numsMap.set(num, (numsMap.get(num) || 0) + 1);
    }

    Array.from(numsMap.entries())
        .sort((a, b) => {
            if (a[1] !== b[1]) return a[1] - b[1];
            return b[0] - a[0];
        })
        .forEach(([num, freq]) => {
            for (let i = 0; i < freq; i++) {
                result.push(num);
            }
        });

    return result;
}
