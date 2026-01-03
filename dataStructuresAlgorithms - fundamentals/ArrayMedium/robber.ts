function rob(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    return Math.max(
        robber(nums.slice(0, nums.length - 1)),
        robber(nums.slice(1))
    );
}

function robber(nums: number[]): number {
    let firstRob: number = 0;
    let secondRob: number = 0;

    for (const num of nums) {
        const temp: number = Math.max(firstRob + num, secondRob);
        firstRob = secondRob;
        secondRob = temp;
    }

    return secondRob;
}
