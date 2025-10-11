function isPathCrossing(path: string): boolean {
    const start: [number, number] = [0, 0];
    const dirc: Record<string, [number, number]>= {
        "N": [-1, 0],
        "S": [1, 0],
        "E": [0, 1],
        "W": [0, -1],
    };

    const steps: string[] = ["00"];

    for (const p of path) {
        const [nextRow, nextCol]: [number, number] = dirc[p];
        start[0] += nextRow;
        start[1] += nextCol;   

        const newStep: string = start[0].toString() + start[1].toString();
        if (steps.includes(newStep)) return true;
        steps.push(newStep);    
    }

    return false;

};