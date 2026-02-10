function findCircleNum(isConnected: number[][]): number {
    const n: number = isConnected.length;
    const visited: Set<number> = new Set();

    let result: number = 0;

    const dfs = (city: number): void => {
        visited.add(city);

        for (let nextCity = 0; nextCity < n; nextCity++) {
            if (!visited.has(nextCity) && isConnected[city][nextCity]) {
                dfs(nextCity);
            }
        }
    };

    for (let city = 0; city < n; city++) {
        if (visited.has(city)) continue;
        result++;
        dfs(city);
    }

    return result;
}