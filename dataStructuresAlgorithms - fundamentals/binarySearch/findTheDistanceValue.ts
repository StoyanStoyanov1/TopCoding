function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    let count = 0;

    arr2.sort((a, b) => a - b);
    
    for (const num of arr1) {
        let left = 0;
        let right = arr2.length - 1;

        let isBreak = false;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const curNum = arr2[mid];

            if (Math.abs(num - curNum) <= d) {
                isBreak = true;
                break;
            }

            if (curNum < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (!isBreak) count++;
    }

    return count;
}
