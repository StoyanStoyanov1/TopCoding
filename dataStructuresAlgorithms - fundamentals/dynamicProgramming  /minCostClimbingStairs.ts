const minCostClimbingStairs = (cost: number[]): number => {
    const n: number = cost.length;
    const arr: number[] = new Array(n);

    arr[0] = cost[0];
    arr[1] = cost[1];

    for (let i = 2; i < n; i++) {
        arr[i] = cost[i] + Math.min(arr[i - 1], arr[i - 2]);
    }

    return Math.min(arr[n - 1], arr[n - 2]);
};
