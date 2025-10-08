function repeatedSubstringPattern(s: string): boolean {
    if (s.length < 2) return false;

    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        const sub: string = s.substring(0, i);
        let isCopy = true;
        if (s.length % i !== 0) continue;

        for (let j = i; j <= s.length - i; j+= i) {
            const nextSub: string = s.substring(j, j + i);
            isCopy = sub === nextSub;
            if (!isCopy) break;
        }

        if (isCopy) return isCopy;
    }

    return false;
};