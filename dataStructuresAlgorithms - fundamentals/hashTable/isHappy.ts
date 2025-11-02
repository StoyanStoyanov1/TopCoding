function isHappy(n: number): boolean {
    const numbers = new Set<number>();

    while (true) {
        let sum = 0;

        for (const num of String(n).split("")) {
            sum += Number(num) ** 2;
        }    

        if (sum === 1) return true;

        if (numbers.has(sum)) return false;

        numbers.add(sum);
        n = sum;
    }
};