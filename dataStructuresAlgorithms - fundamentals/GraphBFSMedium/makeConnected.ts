function makeConnected(n: number, connections: number[][]): number {
    if (connections.length < n - 1) return -1;

    const visited: boolean[] = Array(n).fill(false);
    const graph: number[][] = Array.from({ length: n }, () => []);

    for (const [a, b] of connections) {
        graph[a].push(b);
        graph[b].push(a);
    }

    let components = 0;

    function dfs(node: number): void {
        if (visited[node]) return;
        visited[node] = true;

        for (const next of graph[node]) {
            dfs(next);
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            components++;
            dfs(i);
        }
    }

    return components - 1;
}