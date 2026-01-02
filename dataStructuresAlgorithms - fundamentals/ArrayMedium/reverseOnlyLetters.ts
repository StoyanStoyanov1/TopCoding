function reverseOnlyLetters(s: string): string {
    const arr: string[] = s.split("");
    let left: number = 0;
    let right: number = arr.length - 1;

    while (left < right) {
        if (!isEnglishLetter(arr[left].charCodeAt(0))) {
            left++;
            continue;
        }

        if (!isEnglishLetter(arr[right].charCodeAt(0))) {
            right--;
            continue;
        }

        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join("");
}

function isEnglishLetter(code: number): boolean {
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}
