interface TreeNode {
    val: number,
    left: TreeNode | null,
    right: TreeNode | null
};

var isSameTree = function(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p || !q) return !p && !q;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};