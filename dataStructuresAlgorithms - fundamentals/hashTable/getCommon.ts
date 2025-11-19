function getCommon(nums1: number[], nums2: number[]): number {
 
  const [shorter, longer] = nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1];

  let result = Infinity;
  for (const v of shorter) {
    if (binarySearch(longer, v)) {
      if (v < result) result = v;
      
      return result === Infinity ? -1 : result;
    }
  }

  return -1;
}

function binarySearch(nums: number[], target: number): boolean {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;
    const v = nums[mid];
    if (v === target) return true;
    if (v < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
}
