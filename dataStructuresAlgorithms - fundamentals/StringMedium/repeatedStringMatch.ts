function repeatedStringMatch(a: string, b: string): number {
    let repeated: string = a;
    let count: number = 1;

    while (repeated.length < b.length) {
        repeated += a;
        count++;
    }

    if (repeated.includes(b)) {
        return count;
    }

    repeated += a;
    count++;

    if (repeated.includes(b)) {
        return count;
    }

    return -1;
}
