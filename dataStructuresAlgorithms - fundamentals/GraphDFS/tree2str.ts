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

function tree2str(root: TreeNode | null): string {
    if (!root) return "";

    const result: (string | number)[] = [root.val];

    const dfs = (node: TreeNode | null): void => {
        if (!node) return;

        if (node.left !== null) {
            result.push("(", node.left.val);
            dfs(node.left);
            result.push(")");
        }

        if (node.left && node.right !== null) {
            result.push("(", node.right.val);
            dfs(node.right);
            result.push(")");
        } else if (!node.left && node.right !== null) {
            result.push("(", ")", "(", node.right.val);
            dfs(node.right);
            result.push(")");
        }
    };

    dfs(root);

    return result.join("");
}