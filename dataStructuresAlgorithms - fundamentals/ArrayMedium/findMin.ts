function findMin(nums: number[]): number {
    let left: number = 0;
    let right: number = nums.length - 1;

    const lastNum: number = nums[right];

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2);

        if (nums[mid] <= lastNum) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return nums[left];
}
