interface TreeNode {
    val: number,
    right: TreeNode | null,
    left: TreeNode | null,
}

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    const left: number = maxDepth(root.left) + 1;
    const right: number = maxDepth(root.right) + 1;

    return Math.max(left, right);
};