function uniqueMorseRepresentations(words: string[]): number {
    const morseCode: string[] = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const asciiStartCode:number = 97;

    const morseCodeSet = new Set<string>();

    for (const word of words) {
        const curMorseCode = [];

        for (let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - asciiStartCode;
            curMorseCode.push(morseCode[index]);
        }

        morseCodeSet.add(curMorseCode.join(""));
    } 

    return morseCodeSet.size;

};