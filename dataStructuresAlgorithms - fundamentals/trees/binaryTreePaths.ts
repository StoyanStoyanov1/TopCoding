interface TreeNode {
    val: number,
    left: TreeNode | null,
    right: TreeNode | null,
}

type TreeNodeType = TreeNode | null

function binaryTreePaths(root: TreeNodeType): string[] {
    const result: string[]= []; 

    if (!root) return result;
    
    getValues(root, [root.val], result)
    
    return result;
};

function getValues(root: TreeNode, arr: number[] , result: string[]): void{
    if (!root.left && !root.right) {
        result.push(arr.join("->"));
        return;
    };

    if (root.left) getValues(root.left, [...arr, root.left.val], result);
    if (root.right) getValues(root.right, [...arr, root.right.val], result);
}