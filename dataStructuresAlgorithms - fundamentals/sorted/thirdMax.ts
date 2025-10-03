function thirdMax(nums: number[]): number {
    const sortedNums: number[] = customFilter(nums);

    if (sortedNums.length < 3) return nums[0];

    return nums[2];
};

function customFilter (nums: number[]): number[] {
    while (true) {
        let hasBeenChanged: boolean = false;
        for (let i = 0; i < nums.length; i++) {
            if (i !== nums.length - 1) {
                const currentNum: number = nums[i];
                const nextNum: number = nums[i + 1];

                if (currentNum <= nextNum) {
                    if (currentNum === nextNum) {
                        nums.splice(i, 1);
                        i--;
                    } else {
                    nums[i] = nextNum;
                    nums[i + 1] = currentNum;
                    }
                    hasBeenChanged = true;;
                }
            } 
        }
        
        if (!hasBeenChanged) return nums;
    }
}