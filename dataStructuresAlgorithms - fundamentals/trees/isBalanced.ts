interface TreeNode {
    val: number,
    left: TreeNode | null,
    right: TreeNode | null,
}

function isBalanced(root: TreeNode | null): boolean {
   if (!root) return true;

   const leftHeight: number = getHeight(root.left);
   const rightHeight: number = getHeight(root.right);
   const currentBalance: boolean = Math.abs(leftHeight - rightHeight) <= 1;

   return currentBalance && isBalanced(root.left) && isBalanced(root.right);
};

function getHeight(root: TreeNode | null): number {
    if (!root) return -1;

    return 1 + Math.max(getHeight(root.left) ,getHeight(root.right)) 
}