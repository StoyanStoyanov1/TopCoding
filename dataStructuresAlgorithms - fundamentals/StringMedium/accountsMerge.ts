function accountsMerge(accounts: string[][]): string[][] {
    const graph: Map<string, Set<string>> = new Map();
    const emailToName: Map<string, string> = new Map();

    for (const [name, ...emails] of accounts) {
        for (let i = 0; i < emails.length; i++) {
            const email: string = emails[i];
            emailToName.set(email, name);

            if (!graph.has(email)) {
                graph.set(email, new Set());
            }

            if (i > 0) {
                graph.get(email)!.add(emails[0]);
                graph.get(emails[0])!.add(email);
            }
        }
    }

    const visited: Set<string> = new Set();
    const result: string[][] = [];

    const dfs = (email: string, arr: string[]): void => {
        visited.add(email);
        arr.push(email);

        for (const next of graph.get(email)!) {
            if (!visited.has(next)) {
                dfs(next, arr);
            }
        }
    };

    for (const email of graph.keys()) {
        if (!visited.has(email)) {
            const arr: string[] = [];
            dfs(email, arr);
            arr.sort();
            result.push([emailToName.get(email)!, ...arr]);
        }
    }

    return result;
}
