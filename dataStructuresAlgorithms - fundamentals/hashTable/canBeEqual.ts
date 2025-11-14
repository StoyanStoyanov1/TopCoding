function canBeEqual(target: number[], arr: number[]): boolean {
    const targetMap = new Map<number, number>();
    const arrMap = new Map<number, number>();

    for (let i = 0; i < target.length; i++) {
        targetMap.set(target[i], (targetMap.get(target[i]) || 0) + 1);
        arrMap.set(arr[i], (arrMap.get(arr[i]) || 0) + 1);
    }

    for (const num of target) {
        if (!arrMap.has(num) || targetMap.get(num) !== arrMap.get(num)) {
            return false;
        }
    }

    return true;
}
