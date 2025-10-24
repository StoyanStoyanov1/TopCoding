function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const result: number[] = [];

    for (const num of nums1) {
        const index: number = nums2.indexOf(num);

        if (index >= 0 && 
        index < nums2.length - 1 && 
        nums2[index + 1] > num
        ) result.push(nums2[index + 1]);
        else result.push(-1);
    }  

    return result;
};