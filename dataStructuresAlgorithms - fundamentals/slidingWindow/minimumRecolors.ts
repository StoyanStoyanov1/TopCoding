function minimumRecolors(blocks: string, k: number) {
    let minOper = k;

    for (let i = 0; i <= blocks.length - k; i++) {
        const str: string = blocks.slice(i, i + k);
        const oper: number= countOfWhite(str);

        minOper = Math.min(minOper, oper);
    }

    return minOper;
};

function countOfWhite(str: string): number {
    let count = 0;

    for (const s of str) {
        if (s === "W") count++;
    }

    return count;
}