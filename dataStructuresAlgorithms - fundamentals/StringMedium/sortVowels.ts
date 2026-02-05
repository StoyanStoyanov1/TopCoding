function sortVowels(s: string): string {
    const vowelsSet: Set<string> = new Set(['a', 'e', 'i', 'o', 'u']);

    const vowelCodes: number[] = [];
    const arr: string[] = s.split("");

    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];

        if (vowelsSet.has(char.toLowerCase())) {
            arr[i] = "-";
            vowelCodes.push(char.charCodeAt(0));
        }
    }

    vowelCodes.sort((a, b) => b - a);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "-") {
            arr[i] = String.fromCharCode(vowelCodes.pop()!);
        }
    }

    return arr.join("");
}