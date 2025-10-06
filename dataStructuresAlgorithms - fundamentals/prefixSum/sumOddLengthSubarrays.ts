function sumOddLengthSubarrays(arr: number[]): number {
    let sum: number = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if ((j - i + 1) % 2 === 1) { 
                sum += arr.slice(i, j + 1).reduce((a, b) => a + b, 0);
            }
        }
    }

    return sum;
};