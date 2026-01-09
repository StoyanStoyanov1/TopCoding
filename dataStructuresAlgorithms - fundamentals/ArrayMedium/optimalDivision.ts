function optimalDivision(nums: number[]): string {
    if (nums.length === 1) return nums[0].toString();
    else if (nums.length === 2) return `${nums[0]}/${nums[1]}`;
    else return `${nums[0]}/(${nums.slice(1).join("/")})`;
}