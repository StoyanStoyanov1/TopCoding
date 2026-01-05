function lengthOfLIS(nums: number[]): number {
    if (nums.length === 1) return 1;

    const result: number[] = [];

    for (const num of nums) {
        let left = 0;
        let right = result.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (result[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (left >= result.length) {
            result.push(num);
        } else {
            result[left] = num;
        }
    }

    return result.length;
}
