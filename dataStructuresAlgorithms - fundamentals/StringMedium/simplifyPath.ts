function simplifyPath(path: string): string {
    const pathArr: string[] = [];

    for (const curr of path.split(/\/+/)) {
        if (curr === "" || curr === ".") continue;
        if (curr === "..") {
            pathArr.pop();
        } else {
            pathArr.push(curr);
        }
    }

    return "/" + pathArr.join("/");
}
