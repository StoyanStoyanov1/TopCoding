function findAnagrams(s: string, p: string): number[] {
    const res: number[] = [];
    const n: number = s.length;
    const m: number = p.length;

    if (m > n) return res;

    const aCode: number = 'a'.charCodeAt(0);
    const freq: number[] = new Array(26).fill(0);

    for (let i = 0; i < m; i++) {
        freq[p.charCodeAt(i) - aCode]++;
    }

    for (let i = 0; i < m; i++) {
        freq[s.charCodeAt(i) - aCode]--;
    }

    if (freq.every(x => x === 0)) {
        res.push(0);
    }

    for (let start = 1; start + m - 1 < n; start++) {
        freq[s.charCodeAt(start - 1) - aCode]++;
        freq[s.charCodeAt(start + m - 1) - aCode]--;

        if (freq.every(x => x === 0)) {
            res.push(start);
        }
    }

    return res;
}
