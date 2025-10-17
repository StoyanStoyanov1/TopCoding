interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

type TreeNodeType = TreeNode | null;
var preorderTraversal = function(root: TreeNode, arr: number[] = []) {
    if (!root) return arr;
    arr.push(root.val);

    if (root.left) preorderTraversal(root.left, arr);
    if (root.right) preorderTraversal(root.right, arr);

    return arr;
};