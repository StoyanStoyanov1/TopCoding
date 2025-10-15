interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  return getValues(root, []);
}

function getValues(treeNode: TreeNode, arr: number[]): number[] {
  if (treeNode.left) getValues(treeNode.left, arr);

  arr.push(treeNode.val);

  if (treeNode.right) getValues(treeNode.right, arr);

  return arr;
}