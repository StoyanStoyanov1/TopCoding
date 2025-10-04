function findLHS(nums: number[]): number {
    const numsMap = new Map<number, number>();

    for (const num of nums) {
        numsMap.set(num, (numsMap.get(num) || 0) + 1);
    }

    const sortedNums: number[][] = ([...numsMap.entries()].sort((a, b) => a[0] - b[0]));

    let longLHS: number = 0;

    for (let i = 0; i < sortedNums.length - 1; i++) {
        const num: number = sortedNums[i][0];
        let count: number = sortedNums[i][1];
        
        const nextNum: number = sortedNums[i + 1][0];
        const nextCount: number = sortedNums[i + 1][1];

        const theDifferenceIsOne: boolean= nextNum - num === 1;

        if (theDifferenceIsOne) {
            longLHS = Math.max(count + nextCount, longLHS);
        }

    }

    return longLHS;
};