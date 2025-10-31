function lastStoneWeight(stones: number[]): number {
    
    while (stones.length > 1) {
        const x: number = Math.max(...stones);
        stones.splice(stones.indexOf(x), 1);

        const y: number = Math.max(...stones);
        stones.splice(stones.indexOf(y), 1);

        const difference: number = Math.abs(x - y);

        if (difference) stones.push(difference);
    }

    return stones.length ? stones[0] : 0;
};