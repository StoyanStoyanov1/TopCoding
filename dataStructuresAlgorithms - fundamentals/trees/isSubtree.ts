interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    const rootStr = getValues(root, []).join("");
    const subRootStr = getValues(subRoot, []).join("");
    return rootStr.includes(subRootStr);
}

function getValues(root: TreeNode | null, arr: string[]): string[] {
    if (!root) {
        arr.push("null");
        return arr;
    }
    arr.push(`#${root.val}`);
    getValues(root.left, arr);
    getValues(root.right, arr);
    return arr;
}
