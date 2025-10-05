function longestNiceSubstring(s: string): string {
    if (s.length < 2) return "";

    const symbols = new Set<string>(s);

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (symbols.has(char.toLowerCase()) && symbols.has(char.toUpperCase())) continue;

        const left: string = longestNiceSubstring(s.slice(0, i));
        const right: string = longestNiceSubstring(s.slice(i + 1));

        return left.length >= right.length ? left : right;
    }

    return s;
};