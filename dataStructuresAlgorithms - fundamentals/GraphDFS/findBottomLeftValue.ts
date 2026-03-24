function findBottomLeftValue(root: TreeNode): number {
    let leftMostValue: number = root.val;
    let maxDepth: number = 0;

    const dfs = (node: TreeNode | null, depth: number): void => {
        if (!node) return;

        if (!node.left && !node.right && depth > maxDepth) {
            maxDepth = depth;
            leftMostValue = node.val;
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };

    dfs(root, 0);
    return leftMostValue;
}