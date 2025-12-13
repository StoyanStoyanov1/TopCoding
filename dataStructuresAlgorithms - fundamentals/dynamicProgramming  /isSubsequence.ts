function isSubsequence(s: string, t: string): boolean {
    let idx: number = 0;

    for (const char of t) {
        if (char === s[idx]) {
            idx++;
        }

        if (idx === s.length) {
            break;
        }
    }

    return idx === s.length;
}
