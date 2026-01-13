function minIncrementForUnique(nums: number[]): number {
    const numsSet: Set<number> = new Set();
    let moves: number = 0;

    for (let num of nums) {
        if (!numsSet.has(num)) {
            numsSet.add(num);
            continue;
        }

        while (numsSet.has(num)) {
            num++;
            moves++;
        }

        numsSet.add(num);
    }

    return moves;
}
