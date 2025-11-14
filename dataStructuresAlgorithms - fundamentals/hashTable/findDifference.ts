function findDifference(nums1: number[], nums2: number[]): [number[], number[]] {
    const firstNumSet = new Set(nums1);
    const secondNumSet = new Set(nums2);

    return [
        [...firstNumSet].filter(num => !secondNumSet.has(num)),
        [...secondNumSet].filter(num => !firstNumSet.has(num))
    ];
}
