function maxScore(s: string): number {

    let maxScore: number = 0;

    for (let i = 1; i < s.length; i++) {
        const left: number = [...s.slice(0, i)].filter(a => a === "0").length;
        const right: number = [...s.slice(i, s.length)].filter(a => a === "1").length;
        maxScore = Math.max(maxScore, left + right);
    }

    return maxScore;
    
};