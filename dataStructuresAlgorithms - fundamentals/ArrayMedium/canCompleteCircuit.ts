function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n: number = gas.length;

    for (let start = 0; start < n; start++) {
        let tank: number = gas[start] - cost[start];
        let isPossible: boolean = true;
        let idx: number = (start + 1) % n;

        while (idx !== start) {
            if (tank < 0) {
                isPossible = false;
                break;
            }

            tank += gas[idx] - cost[idx];
            idx = (idx + 1) % n;
        }

        if (isPossible && tank >= 0) {
            return start;
        }
    }

    return -1;
}
