function replaceWords(dictionary: string[], sentence: string): string {
    const setDict: Set<string> = new Set(dictionary);
    const words: string[] = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        const word: string = words[i];
        let curr: string = "";

        for (const char of word) {
            curr += char;
            if (setDict.has(curr)) {
                words[i] = curr;
                break;
            }
        }
    }

    return words.join(" ");
}
