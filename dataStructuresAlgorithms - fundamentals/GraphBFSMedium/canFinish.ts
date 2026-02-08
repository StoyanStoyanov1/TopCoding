function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const preMap: Map<number, number[]> = new Map();
    const visited: Set<number> = new Set();

    for (let i = 0; i < numCourses; i++) {
        preMap.set(i, []);
    }

    for (const [crs, pre] of prerequisites) {
        preMap.get(crs)!.push(pre);
    }

    const dfs = (crs: number): boolean => {
        if (visited.has(crs)) return false;

        if (preMap.get(crs)!.length === 0) return true;

        visited.add(crs);

        for (const pre of preMap.get(crs)!) {
            if (!dfs(pre)) return false;
        }

        visited.delete(crs);
        preMap.set(crs, []);
        return true;
    };

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
}