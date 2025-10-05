function decrypt(code: number[], k: number) {
    const lengthOfCode = code.length;
    const result = new Array(lengthOfCode).fill(0);

    if (k !== 0) {
        for (let i = 0; i < lengthOfCode; i++) {
            if (k > 0) {
                for (let j = 1; j <= k; j++) {
                    const curIndex = (i + j) % lengthOfCode
                    result[i] += code[curIndex];
                }

            } else if (k < 0) {
                for (let j = 1; j <= Math.abs(k); j++) {
                    const curIndex = (i - j + lengthOfCode) % lengthOfCode;
                    result[i] += code[curIndex]; 
                }
            }
        }
    }

    return result;
};