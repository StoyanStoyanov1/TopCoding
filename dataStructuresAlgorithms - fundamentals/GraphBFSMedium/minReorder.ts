function minReorder(n: number, connections: number[][]): number {
    const graph: Array<Array<[number, boolean]>> =
        Array.from({ length: n }, () => []);

    for (const [a, b] of connections) {
        graph[a].push([b, true]);   // оригинална посока → трябва обръщане
        graph[b].push([a, false]);  // обратна посока → не трябва обръщане
    }

    const visited: Set<number> = new Set();
    let result = 0;

    function dfs(node: number, needsOrder: boolean = false): void {
        if (visited.has(node)) return;

        visited.add(node);

        if (needsOrder) result++;

        for (const [next, need] of graph[node]) {
            dfs(next, need);
        }
    }

    dfs(0);

    return result;
}