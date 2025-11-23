function findEvenNumbers(digits: number[]): number[] {
    const result = new Set<number>();
    const n = digits.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j === i) continue;

            for (let k = 0; k < n; k++) {
                if (k === i || k === j) continue;

                const a = digits[i];
                const b = digits[j];
                const c = digits[k];

                if (a !== 0 && c % 2 === 0) {
                    const num = a * 100 + b * 10 + c;
                    result.add(num);
                }
            }
        }
    }

    return Array.from(result).sort((a, b) => a - b);
}
