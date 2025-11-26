function isPerfectSquare(num: number): boolean {
    if (num < 2) return true;

    let low = 0;
    let high = num;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        const square = middle * middle;

        if (square === num) return true;

        if (square < num) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return false;
}
