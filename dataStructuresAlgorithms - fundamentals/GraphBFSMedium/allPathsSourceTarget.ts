function allPathsSourceTarget(graph: number[][]): number[][] {
    const n = graph.length;
    const paths: number[][] = [];

    function dfs(path: number[]): void {
        const last = path[path.length - 1];

        if (last === n - 1) {
            paths.push([...path]);
            return;
        }

        for (const next of graph[last]) {
            dfs([...path, next]);
        }
    }

    dfs([0]);

    return paths;
}