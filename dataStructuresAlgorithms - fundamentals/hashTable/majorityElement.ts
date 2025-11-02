function majorityElement (nums: number[]): number {
    const numsMap = new Map<number, number>();

    nums.forEach(num => numsMap.set(num, (numsMap.get(num) || 0) + 1));

    return Array.from(numsMap.entries()).reduce((maxNum, nextNum) => maxNum[1] > nextNum[1] ? maxNum : nextNum)[0];
}