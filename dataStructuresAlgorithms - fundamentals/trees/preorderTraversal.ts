interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

type TreeNodeType = TreeNode | null;

function preorderTraversal(root: TreeNodeType): number[] {
  return getValues(root, []);
}

function getValues(node: TreeNodeType, arr: number[]): number[] {
  if (!node) return arr;

  arr.push(node.val);

  if (node.left) getValues(node.left, arr);
  if (node.right) getValues(node.right, arr);

  return arr;
}
