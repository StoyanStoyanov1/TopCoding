function findMaxForm(strs: string[], m: number, n: number): number {
    const dp: number[][] = Array.from({ length: m + 1 }, () =>
        Array(n + 1).fill(0)
    );

    for (const str of strs) {
        const count = getCountOfDigits(str);
        const zeros: number = count["0"] ?? 0;
        const ones: number  = count["1"] ?? 0;

        for (let i = m; i >= zeros; i--) {
            for (let j = n; j >= ones; j--) {
                dp[i][j] = Math.max(
                    dp[i][j],
                    1 + dp[i - zeros][j - ones]
                );
            }
        }
    }

    return dp[m][n];
}

function getCountOfDigits(str: string): { "0": number; "1": number } {
    const counter = { "0": 0, "1": 0 };

    for (const ch of str) {
        counter[ch as "0" | "1"]++;
    }

    return counter;
}
