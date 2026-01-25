function longestPalindromeSubseq(s: string): number {
    const n: number = s.length;
    const dp: number[] = Array(n).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        let prev: number = 0;
        dp[i] = 1;

        for (let j = i + 1; j < n; j++) {
            const temp: number = dp[j];

            if (s[i] === s[j]) {
                dp[j] = 2 + prev;
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1]);
            }

            prev = temp;
        }
    }

    return dp[n - 1];
}
