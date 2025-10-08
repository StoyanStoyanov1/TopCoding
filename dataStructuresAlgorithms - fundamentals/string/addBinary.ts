function addBinary(a: string, b: string) {
    let i: number = a.length - 1;
    let j: number = b.length - 1;
    let carry: number = 0;
    let result: string = "";

    while (i >= 0 || j >= 0 || carry > 0) {
        const bitA: number = i >= 0 ? Number(a[i]): 0;
        const bitB: number = j >= 0 ? Number(b[j]): 0;
        const sum: number = bitA + bitB + carry;

        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);

        i--;
        j--;
    }

    return result;
};