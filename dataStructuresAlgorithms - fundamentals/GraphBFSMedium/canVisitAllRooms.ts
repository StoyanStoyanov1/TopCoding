function canVisitAllRooms(rooms: number[][]): boolean {
    const n: number = rooms.length;
    const visitedRooms: boolean[] = Array(n).fill(false);

    visitedRooms[0] = true;

    const queue: number[][] = [rooms[0]];

    while (queue.length > 0) {
        const keys = queue.pop()!;

        for (const key of keys) {
            if (!visitedRooms[key]) {
                visitedRooms[key] = true;
                queue.push(rooms[key]);
            }
        }
    }

    return !visitedRooms.some(v => v === false);
}