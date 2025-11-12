function commonChars(words: string[]): string[] {
    const wordsMap: Map<string, number>[] = [];
    const result: string[] = [];

    for (const word of words) {
        const newWordMap = new Map<string, number>();
        for (const letter of word) {
            newWordMap.set(letter, (newWordMap.get(letter) || 0) + 1);
        }
        wordsMap.push(newWordMap);
    }

    for (const letter of words[0]) {
        let isDuplicate = true;
        for (const curMap of wordsMap) {
            const count = curMap.get(letter) || 0;

            if (count === 0) {
                isDuplicate = false;
                break;
            }

            curMap.set(letter, count - 1);
        }

        if (isDuplicate) result.push(letter);
    }

    return result;
}
