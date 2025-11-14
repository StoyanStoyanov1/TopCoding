function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const numbersMap: Map<number, number> = new Map();

    for (const num of arr1) {
        numbersMap.set(num, (numbersMap.get(num) || 0) + 1);
    }

    const result: number[] = [];

    for (const num of arr2) {
        const count = numbersMap.get(num) || 0;
        const curArr = Array(count).fill(num);

        result.push(...curArr);
        numbersMap.delete(num);
    }

    result.push(
        ...Array.from(numbersMap.keys()).sort((a, b) => a - b)
    );

    return result;
}
