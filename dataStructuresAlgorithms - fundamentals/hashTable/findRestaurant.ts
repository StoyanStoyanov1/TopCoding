function findRestaurant(list1: string[], list2: string[]): string[] {
    const firstMap = new Map<string, number>();
    const secondMap = new Map<string, number>();

    while (list1.length || list2.length) {
        const firstListLength = list1.length;
        const secondListLength = list2.length;

        if (firstListLength) {
            firstMap.set(list1.pop() as string, firstListLength - 1);
        }

        if (secondListLength) {
            secondMap.set(list2.pop() as string, secondListLength - 1);
        }
    }

    const result: string[] = [];
    let foundMatchVal = Infinity;

    for (const [name, idx1] of firstMap) {
        if (secondMap.has(name)) {
            const idx2 = secondMap.get(name)!;
            const total = idx1 + idx2;
            if (total < foundMatchVal) {
                result.length = 0;
                result.push(name);
                foundMatchVal = total;
            } else if (total === foundMatchVal) {
                result.push(name);
            }
        }
    }

    return result;
}
