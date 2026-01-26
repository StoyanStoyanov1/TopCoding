function fractionAddition(expression: string): string {
    const gcd = (a: number, b: number): number =>
        b === 0 ? a : gcd(b, a % b);

    const regex: RegExp = /[+-]?\d+\/\d+/g;
    const fractions: string[] | null = expression.match(regex);

    let numerator: number = 0;
    let denominator: number = 1;

    if (!fractions) return "0/1";

    for (const frac of fractions) {
        const [num, den]: number[] = frac.split("/").map(Number);

        numerator = numerator * den + num * denominator;
        denominator = denominator * den;

        const g: number = gcd(Math.abs(numerator), denominator);
        numerator /= g;
        denominator /= g;
    }

    return `${numerator}/${denominator}`;
}
