function isPathCrossing(path: string): boolean {
    const start: [number, number] = [0, 0];

    const dirc: Record<string, [number, number]> = {
        "N": [-1, 0],
        "S": [1, 0],
        "E": [0, 1],
        "W": [0, -1],
    };

    const steps = new Set<string>();
    steps.add("0,0");

    for (const p of path) {
        const [dRow, dCol] = dirc[p];
        start[0] += dRow;
        start[1] += dCol;

        const key = `${start[0]},${start[1]}`;

        if (steps.has(key)) return true;
        steps.add(key);
    }

    return false;
}
