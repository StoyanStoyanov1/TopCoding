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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return false;

    function dfs(left: TreeNode | null, right: TreeNode | null): boolean {
        if (!left || !right) return !left && !right;
        if (left.val !== right.val) return false;

        return dfs(left.left, right.right) && dfs(left.right, right.left);
    }

    return dfs(root.left, root.right);
}