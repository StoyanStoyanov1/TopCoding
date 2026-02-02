function findReplaceString(
    s: string,
    indices: number[],
    sources: string[],
    targets: string[]
): string {
    const k: number = indices.length;
    let result: string = "";
    let prev: number = 0;

    for (let i = 0; i < k; i++) {
        const index: number = indices[i];
        const source: string = sources[i];
        const target: string = targets[i];

        if (s.slice(index, index + source.length) === source) {
            result += s.slice(prev, index);
            result += target;
            prev = index + source.length;
        }
    }

    result += s.slice(prev);
    return result;
}
