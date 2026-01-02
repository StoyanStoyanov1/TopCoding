function diStringMatch(s: string): number[] {
    const result: number[] = [];
    const desc: number[] = [];

    for (let i = 0; i <= s.length; i++) {
        desc.push(i);

        if (s[i] === "I" || i === s.length) {
            while (desc.length > 0) {
                result.push(desc.pop() as number);
            }
        }
    }

    return result;
}
