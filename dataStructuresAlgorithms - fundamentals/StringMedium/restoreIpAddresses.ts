function restoreIpAddresses(s: string): string[] {
    const result: string[] = [];
    const temp: string[][] = [];
    const n = s.length;

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            for (let k = 1; k <= 3; k++) {
                for (let p = 1; p <= 3; p++) {
                    const numb = i + j + k + p;
                    if (numb === n) {
                        const firstPath = s.substring(0, i);
                        const secondPath = s.substring(i, i + j);
                        const thirdPath = s.substring(i + j, i + j + k);
                        const fourthPath = s.substring(i + j + k, i + j + k + p);

                        temp.push([firstPath, secondPath, thirdPath, fourthPath]);
                    }
                }
            }
        }
    }

    for (const arr of temp) {
        if (isValidAddress(arr)) {
            result.push(arr.join("."));
        }
    }

    return result;
}

function isValidAddress(arr: string[]): boolean {
    for (const num of arr) {
        if (num.length > 1 && num[0] === "0") return false;
        if (Number(num) > 255) return false;
    }
    return true;
}
