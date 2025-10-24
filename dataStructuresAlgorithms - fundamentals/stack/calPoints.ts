function calPoints(operations: string[]): number {
    const stack: number[] = [];

    for (const op of operations) {
        if (op === "+") {
            const sum: number = stack[stack.length - 2] + stack[stack.length - 1];
            stack.push(sum);
        } 
        else if (op === "C") stack.pop();
        else if (op === "D") stack.push(stack[stack.length - 1] * 2);
        else stack.push(parseInt(op));
    }

    return stack.reduce((a, b) => a + b, 0);
};