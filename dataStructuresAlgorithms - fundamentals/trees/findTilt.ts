interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function findTilt(root: TreeNode | null): number {
    let result = 0;

    const calculator = (node: TreeNode | null): number => {
        if (!node) return 0;
        const left = calculator(node.left);
        const right = calculator(node.right);
        result += Math.abs(left - right);
        return left + right + node.val;
    };

    calculator(root);
    return result;
}
