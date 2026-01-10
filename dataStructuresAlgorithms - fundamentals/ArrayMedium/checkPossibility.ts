function checkPossibility(nums: number[]): boolean {
    if (nums.length === 1) return true;

    let isModified = false;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] <= nums[i]) continue;

        if (isModified) return false;
        if (i - 2 < 0 || nums[i - 2] <= nums[i]) nums[i - 1] = nums[i];
        else nums[i] = nums[i - 1];

        isModified = true;
    }

    return true;
}