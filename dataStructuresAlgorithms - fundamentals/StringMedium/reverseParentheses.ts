function reverseParentheses(s: string): string {
    const arr: string[] = s.split("");
    const stack: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];

        if (char === "(") {
            stack.push(i);
        } else if (char === ")") {
            if (!stack.length) continue;

            const openIndex = stack.pop()!;
            const middle = arr.slice(openIndex + 1, i).reverse();

            arr.splice(openIndex, middle.length + 2, ...middle);

            i -= 2;
        }
    }

    return arr.join("");
}
