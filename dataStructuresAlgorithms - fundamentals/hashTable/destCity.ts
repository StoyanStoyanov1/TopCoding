function destCity(paths: [string, string][]): string {
    const startCities = new Set<string>();

    for (const [start] of paths) {
        startCities.add(start);
    }

    for (const [, end] of paths) {
        if (!startCities.has(end)) {
            return end;
        }
    }

    return "";
}
