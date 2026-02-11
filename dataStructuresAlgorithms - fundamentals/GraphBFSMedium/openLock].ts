function openLock(deadends: string[], target: string): number {
    const deadendsSet: Set<string> = new Set(deadends);
    const visited: Set<string> = new Set();
    const queue: Array<[string, number]> = [["0000", 0]];

    while (queue.length > 0) {
        const [key, count] = queue.shift()!;

        if (visited.has(key) || deadendsSet.has(key)) continue;
        visited.add(key);

        if (key === target) return count;

        for (const next of nextStep(key)) {
            queue.push([next, count + 1]);
        }
    }

    return -1;
}

function nextStep(key: string): string[] {
    const nextSteps: string[] = [];

    for (let i = 0; i < key.length; i++) {
        const num = Number(key[i]);
        const up = (num + 1) % 10;
        const down = (num + 9) % 10;

        nextSteps.push(key.slice(0, i) + up + key.slice(i + 1));
        nextSteps.push(key.slice(0, i) + down + key.slice(i + 1));
    }

    return nextSteps;
}