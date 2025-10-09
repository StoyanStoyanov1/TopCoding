function largeGroupPositions(s: string) {
    const result: [number, number][] = [];

    let start: number = 0;

    for (let i = 1; i <= s.length; i++) {
        if (s[start] !== s[i] || i === s.length) {
            const long: number = i - start;
            if (long >= 3) {
                result.push([start, i - 1]);
            }

            start = i;
        }
    }

    return result;
};