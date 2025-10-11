function gcdOfStrings (str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return "";

    const gcb: (a: number, b:number) => number = (a, b) => b === 0 ? a : gcb(b, a % b);
    const length: number = gcb(str1.length, str2.length);
    return str1.slice(0, length);
};