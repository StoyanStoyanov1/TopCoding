function findLongestWord(s: string, dictionary: string[]): string {
    dictionary.sort((a, b) =>
        b.length !== a.length
            ? b.length - a.length
            : a.localeCompare(b)
    );

    for (const word of dictionary) {
        let index: number = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] === word[index]) {
                index++;
            }
            if (index === word.length) {
                return word;
            }
        }
    }

    return "";
}
