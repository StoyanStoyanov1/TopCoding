function calculate(s: string): number {
    const arr: number[] = [];
    let num = 0;
    let prevOperator = "+";

    for (let i = 0; i <= s.length; i++) {
        const char = i < s.length ? s[i] : "";

        if (char === " ") continue;

        if (isDigit(char)) {
            num = num * 10 + Number(char);
        } else {
            if (prevOperator === "+") arr.push(num);
            else if (prevOperator === "-") arr.push(-num);
            else if (prevOperator === "*") arr.push((arr.pop() as number) * num);
            else if (prevOperator === "/") arr.push(Math.trunc((arr.pop() as number) / num));

            prevOperator = char;
            num = 0;
        }
    }

    return arr.reduce((a, b) => a + b, 0);
}

function isDigit(char: string): boolean {
    return !isNaN(Number(char)) && char.trim() !== "";
}
