function intToRoman(num: number): string {
    const values: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    const result: string[] = [];
    let index = 0;

    while (num > 0) {
        const curValue = values[index];
        const count = Math.floor(num / curValue);

        if (count > 0) {
            result.push(symbols[index].repeat(count));
            num -= count * curValue;
        }

        index++;
    }

    return result.join("");
}
