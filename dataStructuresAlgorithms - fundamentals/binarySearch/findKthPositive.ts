function findKthPositive(arr: number[], k: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] - (middle + 1) < k) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return left + k;
}
