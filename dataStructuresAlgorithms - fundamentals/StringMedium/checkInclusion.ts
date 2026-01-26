function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;

    const aCode: number = 97;
    const dp: number[] = Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        dp[s1.charCodeAt(i) - aCode]++;
    }

    let start: number = 0;
    let end: number = s1.length - 1;

    while (end < s2.length) {
        const copyDp: number[] = [...dp];

        for (let i = start; i <= end; i++) {
            const index: number = s2.charCodeAt(i) - aCode;

            if (copyDp[index] > 0) {
                copyDp[index]--;
            } else {
                break;
            }

            if (i === end) return true;
        }

        start++;
        end++;
    }

    return false;
}
