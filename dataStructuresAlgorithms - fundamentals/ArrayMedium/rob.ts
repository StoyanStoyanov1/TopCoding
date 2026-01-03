function rob(nums: number[]): number {
    let firstRob: number = 0;
    let secondRob: number = 0;

    for (const num of nums) {
        const temp: number = Math.max(firstRob + num, secondRob);
        firstRob = secondRob;
        secondRob = temp;
    }

    return secondRob;
}
