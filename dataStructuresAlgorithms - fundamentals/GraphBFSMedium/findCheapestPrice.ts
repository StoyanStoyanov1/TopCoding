function findCheapestPrice(
    n: number,
    flights: number[][],
    src: number,
    dst: number,
    k: number
): number {
    const graph: Array<Array<[number, number]>> =
        Array.from({ length: n }, () => []);

    for (const [start, end, price] of flights) {
        graph[start].push([end, price]);
    }

    const db: number[] = Array(n).fill(Infinity);
    db[src] = 0;

    const queue: Array<[number, number, number]> = [[src, 0, 0]];

    while (queue.length > 0) {
        const [flight, stops, price] = queue.shift()!;

        if (stops > k) continue;

        for (const [nextFlight, nextPrice] of graph[flight]) {
            const newPrice = price + nextPrice;

            if (newPrice < db[nextFlight]) {
                db[nextFlight] = newPrice;
                queue.push([nextFlight, stops + 1, newPrice]);
            }
        }
    }

    return db[dst] !== Infinity ? db[dst] : -1;
}