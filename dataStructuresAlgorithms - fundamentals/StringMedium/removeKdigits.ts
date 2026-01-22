function removeKdigits(num: string, k: number): string {
    const stack: string[] = [];

    for (const char of num) {
        while (stack.length && stack[stack.length - 1] > char && k > 0) {
            k--;
            stack.pop();
        }

        if (stack.length || char !== "0") {
            stack.push(char);
        }
    }

    if (k > 0) {
        return stack.length > k
            ? stack.slice(0, stack.length - k).join("")
            : "0";
    }

    return stack.length ? stack.join("") : "0";
}
