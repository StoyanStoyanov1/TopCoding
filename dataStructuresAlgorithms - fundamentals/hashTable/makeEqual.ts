function makeEqual(words: string[]): boolean {
    const charMap: Map<string, number> = new Map();

    for (const word of words) {
        for (const char of word) {
            charMap.set(char, (charMap.get(char) || 0) + 1);
        }
    }

    return Array.from(charMap.values()).every(count => count % words.length === 0);
}
