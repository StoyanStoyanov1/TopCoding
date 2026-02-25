class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

function kthSmallest(root: TreeNode | null, k: number): number {
    let count = 0;
    let result = 0;

    function dfs(node: TreeNode | null): void {
        if (!node) return;

        dfs(node.left);

        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        dfs(node.right);
    }

    dfs(root);
    return result;
}