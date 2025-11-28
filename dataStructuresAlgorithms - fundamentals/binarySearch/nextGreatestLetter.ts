function nextGreatestLetter(letters: string[], target: string): string {
    for (const char of letters) {
        if (char.charCodeAt(0) > target.charCodeAt(0)) return char;
    }

    return letters[0];
}
