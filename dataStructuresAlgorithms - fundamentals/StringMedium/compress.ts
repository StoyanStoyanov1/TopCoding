function compress(chars: string[]): number {
    const result: string[] = [];

    let count: number = 0;
    let prev: string | null = null;

    for (let i = 0; i <= chars.length; i++) {
        const char: string | null = i < chars.length ? chars[i] : null;

        if (char === null || char !== prev) {
            if (prev !== null) {
                result.push(prev);
                if (count > 1) {
                    result.push(...String(count).split(""));
                }
            }
            prev = char;
            count = 1;
        } else {
            count++;
        }
    }

    // записваме обратно в chars (както е по LeetCode)
    for (let i = 0; i < result.length; i++) {
        chars[i] = result[i];
    }

    return result.length;
}
