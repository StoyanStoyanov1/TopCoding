function maxScore(s: string): number {
    const right = s.split("");
    const left = [];

    let maxSum = 0;

    while (right.length > 1) {
        left.push(right.shift());

        const zeroCount = left.reduce((count, el) => el.toString() === "0" ? count + 1: count, 0);
        const oneCount = right.reduce((count, el) => el.toString() === "1" ? count + 1: count, 0);

        maxSum = Math.max(maxSum, zeroCount + oneCount);
    }

    return maxSum;
};