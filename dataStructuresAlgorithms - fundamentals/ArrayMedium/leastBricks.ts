function leastBricks(wall: number[][]): number {
    const gap = new Map<number, number>();

    for (const row of wall) {
        let position = 0;
        for (const brick of row.slice(0, row.length - 1)) {
            position += brick;
            gap.set(position, (gap.get(position) || 0) + 1);
        }
    }

    let maxGap = gap.size > 0 ? Math.max(...gap.values()) : 0;

    return wall.length - maxGap;
}