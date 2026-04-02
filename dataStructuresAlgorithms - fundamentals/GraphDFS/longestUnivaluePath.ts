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

function longestUnivaluePath(root: TreeNode | null): number {
    let longestPath: number = 0;

    const dfs = (node: TreeNode | null): number => {
        if (!node) return 0;

        const left: number = dfs(node.left);
        const right: number = dfs(node.right);

        let leftPath: number = 0;
        let rightPath: number = 0;

        if (node.left && node.left.val === node.val) {
            leftPath = left + 1;
        }

        if (node.right && node.right.val === node.val) {
            rightPath = right + 1;
        }

        longestPath = Math.max(longestPath, leftPath + rightPath);

        return Math.max(leftPath, rightPath);
    };

    dfs(root);

    return longestPath;
}