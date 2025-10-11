function destCity(paths: string): string {
    const citys = new Map<string, number>();

    for (const [start, end] of paths) {
        citys.set(start, (citys.get(start) || 0) + 1);
        citys.set(end, (citys.get(end) || 0) + 1);
    }

    let found: boolean = false;

    for (const [start, end] of paths) {
        if (citys.get(start) === 1) {
            if (!found) found = true;
            else return start; 
        }
        if (citys.get(end) === 1 ) {
            if (!found) found = true;
            else return end;
        }
    }

    return ""
    
};