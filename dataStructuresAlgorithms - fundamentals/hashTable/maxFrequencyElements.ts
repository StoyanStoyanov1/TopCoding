function maxFrequencyElements(nums: number[]): number {
    const countOfNums = new Map<number, number>();

    for (const num of nums) {
        countOfNums.set(num, (countOfNums.get(num) ?? 0) + 1);
    }

    const maxFreq = Math.max(...Array.from(countOfNums.values()));

    return Array.from(countOfNums.values()).reduce(
        (acc, freq) => (freq === maxFreq ? acc + freq : acc),
        0
    );
}
