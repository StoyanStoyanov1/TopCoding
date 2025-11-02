function romanToInt(s: string): number {
    const romanNumerals: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result: number = 0;

    for (let i = 0; i < s.length; i++) {
        const current: number = romanNumerals[s[i]];
        const next: number = romanNumerals[s[i + 1]];

        if (next && next > current) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
};