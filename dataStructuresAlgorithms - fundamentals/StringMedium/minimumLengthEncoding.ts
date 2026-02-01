function minimumLengthEncoding(words: string[]): number {
    const wordsSet: Set<string> = new Set(words);

    for (const word of words) {
        for (let i = 1; i < word.length; i++) {
            wordsSet.delete(word.slice(i));
        }
    }

    return [...wordsSet].reduce(
        (sum: number, word: string) => sum + word.length + 1,
        0
    );
}
