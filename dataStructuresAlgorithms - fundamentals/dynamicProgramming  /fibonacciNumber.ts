const fib = (n: number): number => {
    if (n <= 1) return n;

    let f1: number = 0;
    let f2: number = 1;

    for (let i = 2; i <= n; i++) {
        const temp: number = f1 + f2;
        f1 = f2;
        f2 = temp;
    }

    return f2;
};
