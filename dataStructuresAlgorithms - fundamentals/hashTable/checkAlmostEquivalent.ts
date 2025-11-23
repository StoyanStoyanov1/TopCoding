function checkAlmostEquivalent(word1: string, word2: string): boolean {
    const w1Map: Map<string, number> = new Map();
    const w2Map: Map<string, number> = new Map();
    const chars: Set<string> = new Set([...word1.split(""), ...word2.split("")]);

    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) {
            const char1 = word1[i];
            w1Map.set(char1, (w1Map.get(char1) || 0) + 1);
        }

        if (i < word2.length) {
            const char2 = word2[i];
            w2Map.set(char2, (w2Map.get(char2) || 0) + 1);
        }
    }

    for (const char of chars) {
        const w1Count: number = w1Map.get(char) ?? 0;
        const w2Count: number = w2Map.get(char) ?? 0;

        if (Math.abs(w1Count - w2Count) > 3) return false;
    }

    return true;
}
