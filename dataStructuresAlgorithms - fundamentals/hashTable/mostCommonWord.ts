function mostCommonWord(paragraph: string, banned: string[]): string {
    const commonWords: Map<string, number> = new Map();
    const bannedSet: Set<string> = new Set(banned);

    const words: string[] = paragraph.toLowerCase().match(/\w+/g) ?? [];

    for (const word of words) {
        if (!bannedSet.has(word)) {
            const currentCount: number = commonWords.get(word) ?? 0;
            commonWords.set(word, currentCount + 1);
        }
    }

    let count: number = 0;
    let mostWord: string = "";

    for (const [word, val] of commonWords.entries()) {
        if (val > count) {
            mostWord = word;
            count = val;
        }
    }

    return mostWord;
}
