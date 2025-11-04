function firstUniqChar(s: string) {
    const chars = new Map<string, number>();

    for (const char of s) {
        chars.set(char, (chars.get(char) || 0) + 1); 
    }

    for (let i = 0; i < s.length; i++) {
        if (chars.get(s[i]) === 1) return i;
    }

    return -1;
};