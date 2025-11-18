function maxLengthBetweenEqualCharacters(s: string): number {
    const charMap: Map<string, number> = new Map();
    let count: number = -1;

    for (let i = 0; i < s.length; i++) {
        const curChar: string = s[i];

        if (charMap.has(curChar)) {
            count = Math.max(i - (charMap.get(curChar) as number) - 1, count);
        } else {
            charMap.set(curChar, i);
        }
    }

    return count;
}
