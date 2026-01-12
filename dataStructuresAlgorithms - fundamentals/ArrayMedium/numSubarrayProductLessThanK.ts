function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let count: number = 0;

    for (let i = 0; i < nums.length; i++) {
        let product: number = nums[i];

        if (product < k) count++;

        for (let j = i + 1; j < nums.length; j++) {
            product *= nums[j];
            if (product < k) count++;
            else break;
        }
    }

    return count;
}
