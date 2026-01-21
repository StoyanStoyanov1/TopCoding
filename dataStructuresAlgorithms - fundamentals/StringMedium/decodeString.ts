function decodeString(s: string): string {
    const countStack: number[] = [];
    const stringStack: string[] = [];

    let currNum = 0;
    let result = "";

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!Number.isNaN(Number(char))) {
            currNum = currNum * 10 + Number(char);
        } else if (char === "[") {
            countStack.push(currNum);
            stringStack.push(result);
            currNum = 0;
            result = "";
        } else if (char === "]") {
            const repeatCount = countStack.pop() as number;
            const prevString = stringStack.pop() as string;
            result = prevString + result.repeat(repeatCount);
        } else {
            result += char;
        }
    }

    return result;
}
