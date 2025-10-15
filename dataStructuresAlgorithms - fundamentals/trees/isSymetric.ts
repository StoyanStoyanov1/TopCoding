interface TreeNode {
    val: number,
    left: TreeNode | null,
    right: TreeNode | null,
}

var isSymmetric = function(root: TreeNode | null) {
    if (!root) return true; 
    return isSymmetricTree(root.left, root.right);
};

function isSymmetricTree(a: TreeNode | null, b: TreeNode | null): boolean {
    if (!a || !b) return !a && !b; 
    if (a.val !== b.val) return false;

    return isSymmetricTree(a.left, b.right) && 
           isSymmetricTree(a.right, b.left);
}