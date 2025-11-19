function findMaxK(nums: number[]): number {
    const numbers = new Set(nums);

    let output = -1;

    for (const num of nums) {
        if (num < 0 && numbers.has(-num)) {
            const absVal = -num;
            if (absVal > output) output = absVal;
        }
    }

    return output;
}
