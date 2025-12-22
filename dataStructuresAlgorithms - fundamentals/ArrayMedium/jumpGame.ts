const canJump = (nums: number[]): boolean => {
    let maxReach: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        if (i > maxReach) return false;

        maxReach = Math.max(maxReach, i + nums[i]);
    }

    return true;
};
