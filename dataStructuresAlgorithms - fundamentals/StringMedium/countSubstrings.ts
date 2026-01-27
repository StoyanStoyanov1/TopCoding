function countSubstrings(s: string): number {
    let count: number = 0;

    for (let i = 0; i < s.length; i++) {
        count += countOfPalindromes(i, i, s);
        count += countOfPalindromes(i, i + 1, s);
    }

    return count;
}

function countOfPalindromes(left: number, right: number, str: string): number {
    let count: number = 0;

    while (
        left >= 0 &&
        right < str.length &&
        str[left] === str[right]
        ) {
        left--;
        right++;
        count++;
    }

    return count;
}
