function reorderLogFiles(logs: string[]): string[] {
    const letter: string[] = [];
    const digit: string[] = [];

    for (const log of logs) {
        const i = log.indexOf(" ");
        const rest = log.slice(i + 1);

        if (rest[0] >= '0' && rest[0] <= '9') {
            digit.push(log);
        } else {
            letter.push(log);
        }
    }

    letter.sort((a, b) => {
        const ia = a.indexOf(" ");
        const ib = b.indexOf(" ");

        const ca = a.slice(ia + 1);
        const cb = b.slice(ib + 1);

        if (ca === cb) {
            return a.slice(0, ia).localeCompare(b.slice(0, ib));
        }

        return ca.localeCompare(cb);
    });

    return [...letter, ...digit];
}
