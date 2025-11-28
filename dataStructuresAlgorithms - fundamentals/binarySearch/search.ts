function search(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;

    while (left <= right) {
        const middle: number = Math.floor((left + right) / 2);
        const num: number = nums[middle];

        if (num === target) return middle;

        if (num < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}
