function minOperations(logs: string[]): number {
    const stack: string[] = [];

    for (const log of logs) {
        if (log === "./") continue;

        if (log === "../") stack.pop();
        else stack.push(log);
    }

    return stack.length;
};