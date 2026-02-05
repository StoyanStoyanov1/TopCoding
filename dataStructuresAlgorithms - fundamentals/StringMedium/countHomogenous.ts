function countHomogenous(s: string): number {
    let result: number = 0;
    let count: number = 0;
    const mod: number = 1_000_000_007;

    for (let i = 0; i < s.length; i++) {
        if (i === 0 || s[i] === s[i - 1]) count++;
        else count = 1;

        result = (result + count) % mod;
    }

    return result;
}