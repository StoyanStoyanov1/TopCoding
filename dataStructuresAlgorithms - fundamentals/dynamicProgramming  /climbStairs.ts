function climbStairs(
    n: number,
    f1: number = 1,
    f2: number = 1,
    count: number = 1
): number {
    if (count === n) return f2;

    return climbStairs(n, f2, f1 + f2, count + 1);
}
