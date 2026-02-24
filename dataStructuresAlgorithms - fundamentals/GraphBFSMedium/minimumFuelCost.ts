function minimumFuelCost(roads: number[][], seats: number): number {
    const n: number = roads.length + 1;
    const graph: number[][] = Array.from({ length: n }, () => []);
    let result: number = 0;

    for (const [u, v] of roads) {
        graph[u].push(v);
        graph[v].push(u);
    }

    function dfs(u: number, parent: number): number {
        let people: number = 1;

        for (const v of graph[u]) {
            if (v === parent) continue;
            people += dfs(v, u);
        }

        if (u !== 0) {
            result += Math.ceil(people / seats);
        }

        return people;
    }

    dfs(0, -1);

    return result;
}