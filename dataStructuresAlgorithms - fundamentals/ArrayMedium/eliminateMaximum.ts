function eliminateMaximum(dist: number[], speed: number[]): number {
    speed.sort((a, b) => a - b);
    dist.sort((a, b) => a - b);

    for (let i: number = 0; i < speed.length; i++) {
        if (dist[i] - speed[i] - i < 0) {
            return i || 1;
        }
    }

    return dist.length;
}
