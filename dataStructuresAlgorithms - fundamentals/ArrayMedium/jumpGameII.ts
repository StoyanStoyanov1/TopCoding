const jump = (nums: number[]): number => {
    let jumps: number = 0;
    let curIdx: number = 0;
    let nextPosition: number = 0;

    for (let i: number = 0; i < nums.length - 1; i++) {
        nextPosition = Math.max(nextPosition, i + nums[i]);

        if (i === curIdx) {
            curIdx = nextPosition;
            jumps++;
        }
    }

    return jumps;
};
