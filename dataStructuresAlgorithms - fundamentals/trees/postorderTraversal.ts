interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

type TreeNodeType = TreeNode | null;

function postorderTraversal(root: TreeNodeType): number[] {
  if (!root) return [];

  return getPostorderTraversal(root, []);
}

function getPostorderTraversal(node: TreeNode, arr: number[]): number[] {
  if (node.left) getPostorderTraversal(node.left, arr);
  if (node.right) getPostorderTraversal(node.right, arr);

  arr.push(node.val);

  return arr;
}
