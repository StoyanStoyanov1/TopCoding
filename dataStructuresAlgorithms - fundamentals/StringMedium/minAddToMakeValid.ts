function minAddToMakeValid(s: string): number {
    let open: number = 0;
    let closed: number = 0;

    for (const char of s) {
        if (char === "(") {
            open++;
        } else if (char === ")") {
            open ? open-- : closed++;
        }
    }

    return open + closed;
}
