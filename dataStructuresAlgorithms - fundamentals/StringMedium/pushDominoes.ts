function pushDominoes(dominoes: string): string {
    const n: number = dominoes.length;
    const dp: number[] = Array(n).fill(0);

    let f: number = 0;
    for (let i = 0; i < n; i++) {
        if (dominoes[i] === "R") f = n;
        else if (dominoes[i] === "L") f = 0;
        else f = Math.max(f - 1, 0);
        dp[i] += f;
    }

    f = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (dominoes[i] === "L") f = n;
        else if (dominoes[i] === "R") f = 0;
        else f = Math.max(f - 1, 0);
        dp[i] -= f;
    }

    const result: string[] = [];
    for (let i = 0; i < n; i++) {
        if (dp[i] === 0) result.push(".");
        else if (dp[i] > 0) result.push("R");
        else result.push("L");
    }

    return result.join("");
}
