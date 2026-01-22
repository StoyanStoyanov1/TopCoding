function characterReplacement(s: string, k: number): number {
    const countMap: Map<string, number> = new Map();
    let left: number = 0;
    let maxCount: number = 0;
    let result: number = 0;

    for (let right = 0; right < s.length; right++) {
        const char: string = s[right];
        countMap.set(char, (countMap.get(char) ?? 0) + 1);

        maxCount = Math.max(maxCount, countMap.get(char)!);

        while (right - left + 1 - maxCount > k) {
            const leftChar: string = s[left];
            countMap.set(leftChar, countMap.get(leftChar)! - 1);
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
}
