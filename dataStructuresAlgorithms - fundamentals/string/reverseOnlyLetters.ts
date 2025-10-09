function reverseOnlyLetters(s: string): string {
    const arr: string[] = s.split("");
    let right: number = arr.length - 1;
    let left: number = 0;

    while (left < right) {
        if (!isEnglishLetter(arr[left].charCodeAt(0))) {
            left++;
            continue
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
    
};

function isEnglishLetter(dec: number): boolean {
    return (dec >= 65 && dec <= 90) || (dec >= 97 && dec <= 122);
}