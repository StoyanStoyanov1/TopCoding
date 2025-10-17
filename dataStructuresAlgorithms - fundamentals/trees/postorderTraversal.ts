interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

type TreeNodeType = TreeNode | null;

var postorderTraversal = function(root: TreeNodeType, arr: number[] = []) {
    if (!root) return arr;

    if (root.left) postorderTraversal(root.left, arr);
    if (root.right) postorderTraversal(root.right, arr);

    arr.push(root.val);

    return arr;
};
