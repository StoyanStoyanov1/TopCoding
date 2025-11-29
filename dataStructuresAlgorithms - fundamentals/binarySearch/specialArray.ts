function specialArray(nums: number[]): number {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const diff = nums.length - mid; 
        if (nums[mid] >= diff) {
            if (mid === 0 || nums[mid - 1] < diff) {
                return diff;
            }
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}
