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

function findTilt(root: TreeNode | null): number {
    let result = 0;

    const dfs = (node: TreeNode | null): number => {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        result += Math.abs(left - right);

        return left + right + node.val;
    };

    dfs(root);

    return result;
}