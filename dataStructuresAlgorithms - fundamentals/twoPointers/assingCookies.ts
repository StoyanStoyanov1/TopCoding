function findContentChildren(g: number[], s: number[]): number {
    let counter: number = 0;
    s.sort((a, b) => b - a);
    g.sort((a, b) => a - b);


    for (const ch of g) {
        while (s.length > 0) {
            const cookie: number = s.pop();
            if (cookie >= ch) {
                counter++;
                break;
            }
        }

        if (s.length === 0) break;
        
    }

    return counter;
};