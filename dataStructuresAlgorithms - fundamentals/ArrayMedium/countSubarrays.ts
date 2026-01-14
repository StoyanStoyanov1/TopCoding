function countSubarrays(nums: number[], k: number): number {
    const maxNum: number = Math.max(...nums);

    let left: number = 0;
    let currentCount: number = 0;
    let count: number = 0;

    for (let right: number = 0; right < nums.length; right++) {
        if (nums[right] === maxNum) {
            currentCount++;
        }

        while (currentCount >= k) {
            count += nums.length - right;
            if (nums[left] === maxNum) {
                currentCount--;
            }
            left++;
        }
    }

    return count;
}
