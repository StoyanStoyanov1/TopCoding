function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const preMap: Map<number, number[]> = new Map();
    const visiting: Set<number> = new Set();

    for (let i = 0; i < numCourses; i++) {
        preMap.set(i, []);
    }

    for (const [course, pre] of prerequisites) {
        preMap.get(course)!.push(pre);
    }

    function dfs(course: number): boolean {
        if (visiting.has(course)) return false;

        if (preMap.get(course)!.length === 0) return true;

        visiting.add(course);

        for (const pre of preMap.get(course)!) {
            if (!dfs(pre)) return false;
        }

        visiting.delete(course);

        preMap.set(course, []);

        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
}