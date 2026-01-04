function findKthLargest(nums: number[], k: number): number {
    const arr: number[] = [...nums];
    let kthLargest: number = 0;

    for (let i = 0; i < k; i++) {
        const max: number = Math.max(...arr);
        const index: number = arr.indexOf(max);

        arr.splice(index, 1);
        kthLargest = max;
    }

    return kthLargest;
}
