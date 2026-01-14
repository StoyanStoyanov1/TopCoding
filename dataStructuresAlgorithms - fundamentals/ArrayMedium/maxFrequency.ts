function maxFrequency(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    let left: number = 0;
    let sum: number = 0;
    let count: number = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (nums[right] * (right - left + 1) - sum > k) {
            sum -= nums[left];
            left++;
        }

        count = Math.max(count, right - left + 1);
    }

    return count;
}
