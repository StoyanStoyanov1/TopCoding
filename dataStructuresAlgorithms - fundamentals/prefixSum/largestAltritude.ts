function largestAltitude(gain: number[]): number {
    const arr: number[] = [0];

    for (const g of gain) {
        arr.push(arr[arr.length - 1] + g);
    } 
    
    return Math.max(...arr);
};