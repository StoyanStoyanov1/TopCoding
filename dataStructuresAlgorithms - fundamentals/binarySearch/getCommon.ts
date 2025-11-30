function getCommon(nums1: number[], nums2: number[]): number {
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);
    
    const numbers = nums1.length < nums2.length ? nums1 : nums2;

    let minNum = Infinity;

    for (const num of numbers) {
        if (nums1Set.has(num) && nums2Set.has(num)) {
            minNum = Math.min(num, minNum);
        }
    }

    return minNum === Infinity ? -1 : minNum;
}
