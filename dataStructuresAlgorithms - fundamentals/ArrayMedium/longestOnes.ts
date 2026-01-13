function longestOnes(nums: number[], k: number): number {
    let left: number = 0;
    let right: number = 0;

    while (right < nums.length) {
        k -= 1 - nums[right];

        if (k < 0) {
            k += 1 - nums[left];
            left++;
        }

        right++;
    }

    return right - left;
}
