interface TreeNode {
    val: number,
    left: TreeNode | null,
    right: TreeNode | null,
}

type TreeNodeType = TreeNode | null

var binaryTreePaths = function(root: TreeNodeType, arr: string[] = [], str: string = "") {
    if (!root) return arr;

    str += str ? `->${String(root.val)}` : String(root.val);

    if (!root.left && !root.right) {
        arr.push(str);
    }

    if (root.left) binaryTreePaths(root.left, arr, str);
    if (root.right) binaryTreePaths(root.right, arr, str);

    return arr;
};