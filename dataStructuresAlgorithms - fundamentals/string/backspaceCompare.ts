function backspaceCompare(s: string, t: string): boolean {
    return getStr(s) === getStr(t);
};

function getStr(str: string) {
    const result: string[] = []
    
    for (const s of str) {
        if (s === "#") {
            if (result.length) result.pop();
        } else {
            result.push(s);
        }    

    }

    return result.join("");
}