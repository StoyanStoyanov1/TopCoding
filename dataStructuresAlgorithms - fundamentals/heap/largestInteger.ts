function largestInteger(num: number): number {
    if (num === 0) return 0;

    const digits = String(num).split('').map(Number);
    
    const odds: number[] = digits.filter(d => d % 2 === 1).sort((a, b) => b - a);
    const evens: number[] = digits.filter(d => d % 2 === 0).sort((a, b) => b - a);
    
    const result: string = digits.map(d => (d % 2 === 0 ? evens.shift() : odds.shift())).join('');
    return Number(result);
};