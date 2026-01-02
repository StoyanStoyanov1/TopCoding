function uncommonFromSentences(s1: string, s2: string): string[] {
    const result: string[] = [];
    const words: string[] = [
        ...s1.trim().split(/\s+/),
        ...s2.trim().split(/\s+/)
    ];

    const wordsMap: Map<string, number> = new Map();

    for (const word of words) {
        wordsMap.set(word, (wordsMap.get(word) ?? 0) + 1);
    }

    for (const [word, count] of wordsMap.entries()) {
        if (count === 1) {
            result.push(word);
        }
    }

    return result;
}
