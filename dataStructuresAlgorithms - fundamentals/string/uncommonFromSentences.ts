function uncommonFromSentences(s1: string, s2: string): string[] {
    const worldsCounter = new Map<string, number>();
    const words: string[] = [...s1.split(" "), ...s2.split(" ")];

    for (const word of words) {
        worldsCounter.set(word, (worldsCounter.get(word) || 0) + 1); 
    }

    const result: string[] = [];

    for (const [key, value] of worldsCounter) {
        if (value === 1) result.push(key);
    }

    return result;
};