function singleNumber(nums: number[]): number {
    for (const num of nums) {
        const countOfNum = nums.filter(n => n === num).length;
        if (countOfNum === 0) return num;
    }

    return 0;
}