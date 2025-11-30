function targetIndices(nums: number[], target: number): number[] {
    nums.sort((a, b) => a - b);

    return nums.reduce<number[]>((arr, num, idx) => {
        if (num === target) arr.push(idx);
        return arr;
    }, []);
}
