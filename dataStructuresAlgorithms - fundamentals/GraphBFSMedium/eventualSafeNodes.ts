function eventualSafeNodes(graph: number[][]): number[] {
    const n: number = graph.length;
    const state: number[] = Array(n).fill(0);
    const result: number[] = [];

    for (let i = 0; i < n; i++) {
        if (dfs(i, graph, state)) result.push(i);
    }

    return result;
}

function dfs(node: number, graph: number[][], state: number[]): boolean {
    if (state[node] !== 0) return state[node] === 2;

    state[node] = 1; // visiting

    for (const nei of graph[node]) {
        if (!dfs(nei, graph, state)) return false;
    }

    state[node] = 2; // safe
    return true;
}