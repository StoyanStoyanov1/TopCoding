
function reverseStr(s: string, k: number): string {
    let index: number = 0;

    while (index < s.length) {
        const next: number = Math.min(s.length, index + k)

        const reversedStr: string = s.slice(index, next).split("").reverse().join("");

        s = s.slice(0, index) + reversedStr + s.slice(next);
        index += k * 2;
    }  

    return s;
    
};
