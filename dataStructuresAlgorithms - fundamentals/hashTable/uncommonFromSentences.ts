function uncommonFromSentences(s1: string, s2: string): string[] {
    const wordsCounter: Map<string, number> = new Map();
    const words: string[] = [...s1.split(" "), ...s2.split(" ")];

    for (const word of words) {
        wordsCounter.set(word, (wordsCounter.get(word) ?? 0) + 1);
    }

    const result: string[] = [];

    for (const [key, value] of wordsCounter.entries()) {
        if (value === 1) {
            result.push(key);
        }
    }

    return result;
}
