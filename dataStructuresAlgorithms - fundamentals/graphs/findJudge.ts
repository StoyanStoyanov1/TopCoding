function findJudge(n: number, trust: Array<[number, number]>): number {
    const trustScore: number[] = new Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        trustScore[a]--;
        trustScore[b]++;
    }

    for (let i = 1; i <= n; i++) {
        if (trustScore[i] === n - 1) {
            return i;
        }
    }

    return -1;
}
