function wordBreak(s: string, wordDict: string[]): boolean {
    const n = s.length;
    const words = new Set<string>(wordDict);

    const dp: boolean[] = Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && words.has(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
}
