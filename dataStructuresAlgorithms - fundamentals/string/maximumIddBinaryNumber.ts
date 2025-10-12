function maximumOddBinaryNumber(s: string): string {
    let count: number = 0;

    for (const num of s) {
        if (num === "1") count++;
    }

    return "1".repeat(count - 1) + "0".repeat(s.length - count) + "1";
};