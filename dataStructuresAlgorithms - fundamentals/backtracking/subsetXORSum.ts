export function subsetXORSum(nums: number[]): number {
    let total = 0;

    const dfs = (idx: number = 0, xor: number = 0): void => {
        if (idx === nums.length) {
            total += xor;
            return;
        }

        dfs(idx + 1, xor ^ nums[idx]);
        dfs(idx + 1, xor);
    };

    dfs();
    return total;
}
