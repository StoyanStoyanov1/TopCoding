function findLeaves(root) {
    const result = [];

    while (root && hasNodes(root)) {
        const leaves = [];
        removeLeaves(root, leaves);
        result.push(leaves);
    }

    if (root) result.push([root.val]);

    return result;
}

function removeLeaves(node, leaves) {
    if (!node) return null;

    if (!node.left && !node.right) {
        leaves.push(node.val);
        return null;
    }

    node.left = removeLeaves(node.left, leaves);
    node.right = removeLeaves(node.right, leaves);

    return node;
}

function hasNodes(node) {
    if (!node) return false;

    return node.left !== null || node.right !== null;
}