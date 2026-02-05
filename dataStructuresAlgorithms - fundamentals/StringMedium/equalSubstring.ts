function equalSubstring(s: string, t: string, maxCost: number): number {
    const n: number = s.length;

    let maxLength: number = 0;
    let start: number = 0;
    let curCost: number = 0;

    for (let i = 0; i < n; i++) {
        curCost += Math.abs(s.charCodeAt(i) - t.charCodeAt(i));

        while (curCost > maxCost) {
            curCost -= Math.abs(
                s.charCodeAt(start) - t.charCodeAt(start)
            );
            start++;
        }

        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}