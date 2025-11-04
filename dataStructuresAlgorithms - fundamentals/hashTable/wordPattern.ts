function wordPattern (pattern: string, s: string): boolean {
    const hashLatters = new Map<string, string>();
    const hashWords = new Map<string, string>();

    const words: string[] = s.trim().split(/\s+/);

    if (pattern.length !== words.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        const char: string = pattern[i];
        const word: string = words[i];
        
        if (hashLatters.has(char) && hashLatters.get(char) !== word) return false; 
        if (hashWords.has(word) && hashWords.get(word) !== char) return false;
        
        hashLatters.set(char, word);
        hashWords.set(word, char);
    }    

    return true;
};