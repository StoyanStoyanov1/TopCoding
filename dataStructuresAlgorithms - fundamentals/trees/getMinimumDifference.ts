interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function getMinimumDifference(root: TreeNode): number {
    const arr = getValues(root, []);
    let minDifference = Infinity;
    arr.sort((a, b) => a - b);
    for (let i = 1; i < arr.length; i++) {
        minDifference = Math.min(minDifference, Math.abs(arr[i - 1] - arr[i]));
    }
    return minDifference;
}

function getValues(root: TreeNode, arr: number[]): number[] {
    arr.push(root.val);
    if (root.left) getValues(root.left, arr);
    if (root.right) getValues(root.right, arr);
    return arr;
}
