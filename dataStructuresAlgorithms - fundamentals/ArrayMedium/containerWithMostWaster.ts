function maxArea(height: number[]): number {
    let maxAmountOfWater: number = 0;

    let left: number = 0;
    let right: number = height.length - 1;

    while (left < right) {
        const width: number = right - left;
        const minHeight: number = Math.min(height[left], height[right]);
        maxAmountOfWater = Math.max(maxAmountOfWater, width * minHeight);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxAmountOfWater;
}
