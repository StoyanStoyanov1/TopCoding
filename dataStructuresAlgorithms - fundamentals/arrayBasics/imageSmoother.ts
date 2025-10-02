function imageSmoother(img: number[][]): number[][] {
    const m: number = img.length;
    const n: number = img[0].length;
    const result: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let sum: number = 0;
            let count: number = 0;
            
            const startX: number = i > 0 ? i - 1 : 0;
            const endX: number = i < m - 1 ? i + 1 : m - 1;
            const startY: number = j > 0 ? j - 1 : 0;
            const endY: number = j < n - 1 ? j + 1 : n - 1;
            
            for (let x = startX; x <= endX; x++) {
                for (let y = startY; y <= endY; y++) {
                    sum += img[x][y];
                    count++;
                }
            }
            
            result[i][j] = Math.floor(sum / count);
        }
    }
    
    return result;
};