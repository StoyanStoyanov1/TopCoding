interface TreeNode {
    val: number,
    right: TreeNode | null,
    left: TreeNode | null,
}

var maxDepth = function(root: TreeNode | null) {
    if (!root) return 0;

    if (!root?.left && !root?.right) return 1;

    return getMaxDepth(root, 1, 1);
};

function getMaxDepth(root: TreeNode, count: number, maxNum: number) {
    if (!root.left && !root.right) return Math.max(count, maxNum);
    

    if (root.left) maxNum = getMaxDepth(root.left, count + 1, maxNum);

    if (root.right) maxNum = getMaxDepth(root.right, count + 1, maxNum);

    return maxNum
}