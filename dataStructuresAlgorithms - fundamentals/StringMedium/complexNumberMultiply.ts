function complexNumberMultiply(num1: string, num2: string): string {
    const [a, b]: number[] = num1.slice(0, -1).split("+").map(Number);
    const [c, d]: number[] = num2.slice(0, -1).split("+").map(Number);

    return `${a * c - b * d}+${a * d + b * c}i`;
}
