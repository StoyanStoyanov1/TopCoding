function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") return "0";

    const n = num1.length;
    const m = num2.length;

    const arr: number[] = Array(n + m).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            const currProd = (num1.charCodeAt(i) - 48) * (num2.charCodeAt(j) - 48);

            const sum = currProd + arr[i + j + 1];

            arr[i + j + 1] = sum % 10;
            arr[i + j] += Math.floor(sum / 10);
        }
    }

    while (arr[0] === 0) arr.shift();

    return arr.join("");
}
