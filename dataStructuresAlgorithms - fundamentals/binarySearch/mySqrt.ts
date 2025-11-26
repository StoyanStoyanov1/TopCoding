function mySqrt(x: number): number {
    let low = 0;
    let high = x;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const sqrt = mid * mid;

        if (sqrt === x) return mid;

        if (sqrt < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return high;
}
