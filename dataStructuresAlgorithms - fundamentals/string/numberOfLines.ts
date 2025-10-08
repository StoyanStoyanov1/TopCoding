function numberOfLines(widths: number[], s: string): [number, number] {
    const charCodeOfa: number = 97

    let count: number = 1;
    let wight: number = 0;

    for (let i = 0; i < s.length; i++) {
        const charCode: number = widths[s.charCodeAt(i) - charCodeOfa]
        wight += charCode;
        if (wight > 100) {
            wight = charCode;
            count++;
        }
    }

    return [count, wight]
    
};