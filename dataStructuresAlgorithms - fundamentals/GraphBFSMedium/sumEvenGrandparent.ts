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

function sumEvenGrandparent(root: TreeNode | null): number {
    let result = 0;

    function dfs(
        node: TreeNode | null,
        parent: TreeNode | null,
        grandparent: TreeNode | null
    ): void {
        if (!node) return;

        if (grandparent && grandparent.val % 2 === 0) {
            result += node.val;
        }

        dfs(node.left, node, parent);
        dfs(node.right, node, parent);
    }

    dfs(root, null, null);

    return result;
}