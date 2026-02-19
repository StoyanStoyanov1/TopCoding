class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

function pseudoPalindromicPaths(root: TreeNode | null): number {
    if (!root) return 0;

    const paths: string[] = [];
    const queue: Array<[TreeNode | null, string]> = [[root, ""]];

    while (queue.length > 0) {
        const [node, path] = queue.shift()!;

        if (!node) continue;

        const newPath = path + node.val;

        if (!node.left && !node.right) {
            paths.push(newPath);
            continue;
        }

        queue.push([node.left, newPath]);
        queue.push([node.right, newPath]);
    }

    let result = 0;

    for (const path of paths) {
        const freq: Record<string, number> = {};

        for (const ch of path) {
            freq[ch] = (freq[ch] || 0) + 1;
        }

        let oddCount = 0;
        for (const key in freq) {
            if (freq[key] % 2 !== 0) oddCount++;
        }

        if (oddCount <= 1) result++;
    }

    return result;
}