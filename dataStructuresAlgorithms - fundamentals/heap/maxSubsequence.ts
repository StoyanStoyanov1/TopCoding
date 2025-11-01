function maxSubsequence(nums: number[], k: number): number[] {
    const indexed: [number, number][] = nums.map((num, i) => [num, i]);

    indexed.sort((a, b) => b[0] - a[0]);

    const highest: [number, number][] = indexed.slice(0, k);

    highest.sort((a, b) => a[1] - b[1]);

    return highest.map(item => item[0]);
}
