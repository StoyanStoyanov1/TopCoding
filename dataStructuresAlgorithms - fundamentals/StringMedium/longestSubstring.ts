function longestSubstring(s: string, k: number): number {
    const charMap: Map<string, number> = new Map();

    for (const char of s) {
        charMap.set(char, (charMap.get(char) ?? 0) + 1);
    }

    for (const [ch, count] of charMap) {
        if (count < k) {
            return Math.max(
                ...s.split(ch).map(part => longestSubstring(part, k))
            );
        }
    }

    return s.length;
}
