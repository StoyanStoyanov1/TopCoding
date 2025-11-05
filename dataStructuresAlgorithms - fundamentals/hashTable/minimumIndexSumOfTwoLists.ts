function findRestaurant(list1: string[], list2: string[]): string[] {
    const firstMap = new Map<string, number>();
    const secondMap = new Map<string, number>();

    for (let i = 0; i < list1.length; i++) {
        firstMap.set(list1[i], i);
    }

    for (let j = 0; j < list2.length; j++) {
        secondMap.set(list2[j], j);
    }

    const result: string[] = [];
    let foundMatchVal = Infinity;

    for (const [restaurant, index1] of firstMap.entries()) {
        if (secondMap.has(restaurant)) {
            const index2 = secondMap.get(restaurant)!;
            const totalIndex = index1 + index2;

            if (totalIndex < foundMatchVal) {
                result.length = 0;
                result.push(restaurant);
                foundMatchVal = totalIndex;
            } else if (totalIndex === foundMatchVal) {
                result.push(restaurant);
            }
        }
    }

    return result;
}
