function maxPower(s: string): number {
    
    let powerOfS: number = 0;
    let i: number = 0;

    while (i < s.length) {
        const curChar: string = s[i];
        let nextIndex:number = i + 1;
        let power: number = 1;

        while (nextIndex < s.length && curChar === s[nextIndex]) {
            power ++;
            nextIndex ++;
        }
        i = nextIndex;

        powerOfS = Math.max(powerOfS, power);
    }

    return powerOfS;

};