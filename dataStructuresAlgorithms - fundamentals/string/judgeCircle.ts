function judgeCircle(moves: string) {
    const startPosition: number[] = [0, 0]

    const directions: Record<string, [number, number]> = {
        "L": [-1, 0],
        "R": [1, 0],
        "U": [0, -1],
        "D": [0, 1],
    }

    for (const dir of moves) {
        startPosition[0] += directions[dir][0];
        startPosition[1] += directions[dir][1];
    }

    return startPosition.every(p => p === 0);
};