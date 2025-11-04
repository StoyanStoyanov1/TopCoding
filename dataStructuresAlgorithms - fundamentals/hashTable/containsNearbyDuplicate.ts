function containsNearbyDuplicate(nums: number[], k: number) {
    for (let i = 0; i < nums.length; i++) {
        let j: number= i + 1;
        while (Math.abs(i - j) <= k && j < nums.length) {
            if (nums[i] === nums[j]) return true;
            j++;
        }
    }

    return false;
};