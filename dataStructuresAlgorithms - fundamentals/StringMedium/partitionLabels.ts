function partitionLabels(s: string): number[] {
    const charMap: Map<string, number> = new Map();
    const n: number = s.length;

    for (let i = 0; i < n; i++) {
        charMap.set(s[i], i);
    }

    const result: number[] = [];

    let left: number = 0;
    let right: number = 0;

    for (let i = 0; i < n; i++) {
        right = Math.max(right, charMap.get(s[i])!);

        if (i === right) {
            result.push(right - left + 1);
            left = i + 1;
        }
    }

    return result;
}
