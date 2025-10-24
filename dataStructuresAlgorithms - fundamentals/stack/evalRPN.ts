function evalRPN(tokens: string[]): number {
    const operators: Record<string, (a: number, b: number) => number> = {
        "*": (a, b) => b * a,
        "/": (a, b) => Math.trunc(b / a),
        "+": (a, b) => b + a,
        "-": (a, b) => b - a,
    };

    const stack: number[] = [];

    for (const token of tokens) {
        if (!operators[token]) {
            stack.push(parseInt(token, 10));
        } else {
            const a = stack.pop()!;
            const b = stack.pop()!;
            stack.push(operators[token](a, b));
        }
    }

    return stack.pop()!;
}
