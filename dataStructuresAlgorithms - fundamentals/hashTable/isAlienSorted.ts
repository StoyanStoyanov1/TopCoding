function isAlienSorted(words: string[], order: string): boolean {
    const alphabet: Record<string, number> = {};

    for (let i = 0; i < order.length; i++) {
        alphabet[order[i]] = i;
    }

    for (let i = 0; i < words.length - 1; i++) {
        const firstWord = words[i];
        const secondWord = words[i + 1];
        const minLen = Math.min(firstWord.length, secondWord.length);

        if (firstWord.length > secondWord.length && firstWord.startsWith(secondWord)) {
            return false;
        }

        for (let j = 0; j < minLen; j++) {
            const firstCharOrder = alphabet[firstWord[j]];
            const secondCharOrder = alphabet[secondWord[j]];

            if (firstCharOrder > secondCharOrder) {
                return false;
            }

            if (firstCharOrder < secondCharOrder) {
                break;
            }
        }
    }

    return true;
}
