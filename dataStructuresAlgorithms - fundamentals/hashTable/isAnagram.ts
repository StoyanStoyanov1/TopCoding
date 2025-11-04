function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let sCharSum: number = 0;
    let tCharSum: number = 0;

    for (let i = 0; i < s.length; i++) {
        sCharSum += s.charCodeAt(i);
        tCharSum += t.charCodeAt(i);
    }
    
    return sCharSum === tCharSum;
};