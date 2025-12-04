function validPath(
    n: number,
    edges: Array<[number, number]>,
    source: number,
    destination: number
): boolean {
    if (source === destination) return true;

    const graph: Map<number, number[]> = new Map();

    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }

    for (const [u, v] of edges) {
        graph.get(u)!.push(v);
        graph.get(v)!.push(u);
    }

    const visited = new Set<number>();
    const queue: number[] = [source];
    visited.add(source);

    while (queue.length > 0) {
        const current = queue.shift()!;
        if (current === destination) return true;

        for (const neighbor of graph.get(current)!) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return false;
}
