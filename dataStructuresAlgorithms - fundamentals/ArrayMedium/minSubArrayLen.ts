function minSubArrayLen(target: number, nums: number[]): number {
    let left: number = 0;
    let sum: number = 0;
    let length: number = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            length = Math.min(length, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return length === Infinity ? 0 : length;
}
