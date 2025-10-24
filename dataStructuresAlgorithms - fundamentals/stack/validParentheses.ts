function validParentheses(s: string): boolean {
    const brackets: Record<string, string> = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    const stack: string[] = [];

    for (const brack of s) {
        if (!(brack in brackets)) {
            stack.push(brack);
        } else if (stack.length > 0 && stack[stack.length - 1] === brackets[brack]) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
}
