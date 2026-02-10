function networkDelayTime(times: number[][], n: number, k: number): number {
    const visited: Set<number> = new Set();
    const edges: Map<number, [number, number][]> = new Map();

    for (const [u, v, w] of times) {
        if (!edges.has(u)) edges.set(u, []);
        edges.get(u)!.push([v, w]);
    }

    const minHeap: [number, number][] = [[0, k]];
    let maxTime: number = 0;

    while (minHeap.length) {
        const [time, node] = minHeap.shift()!;

        if (visited.has(node)) continue;
        visited.add(node);

        maxTime = Math.max(maxTime, time);

        if (edges.has(node)) {
            for (const [next, weight] of edges.get(node)!) {
                if (!visited.has(next)) {
                    minHeap.push([time + weight, next]);
                }
            }
        }

        minHeap.sort((a, b) => a[0] - b[0]);
    }

    return visited.size === n ? maxTime : -1;
}