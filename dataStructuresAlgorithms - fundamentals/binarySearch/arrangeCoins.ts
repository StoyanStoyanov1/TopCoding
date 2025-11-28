function arrangeCoins(n: number): number {
    let low: number = 0;
    let high: number = n;

    while (low <= high) {
        const middle: number = Math.floor((low + high) / 2);
        const coins: number = (middle / 2) * (middle + 1);

        if (coins === n) return middle;

        if (coins < n) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return high;
}
