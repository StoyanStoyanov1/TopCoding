function countCharacters(words: string[], chars: string): number {
    const charsMap: Map<string, number> = new Map();

    for (const char of chars) {
        charsMap.set(char, (charsMap.get(char) || 0) + 1);
    }

    let sum = 0;

    for (const word of words) {
        const copyCharsMap: Map<string, number> = new Map(charsMap);
        let isGood = true;

        for (const char of word) {
            const count = copyCharsMap.get(char) || 0;

            if (count === 0) {
                isGood = false;
                break;
            }

            copyCharsMap.set(char, count - 1);
        }

        if (isGood) {
            sum += word.length;
        }
    }

    return sum;
}
