function kthDistinct(arr: string[], k: number): string {
    const kthMap: Map<string, number> = new Map();

    for (const item of arr) {
        kthMap.set(item, (kthMap.get(item) || 0) + 1);
    }

    const distinctStrings: [string, number][] = Array.from(kthMap.entries()).filter(
        ([_, count]) => count === 1
    );

    return distinctStrings.length >= k ? distinctStrings[k - 1][0] : "";
}
