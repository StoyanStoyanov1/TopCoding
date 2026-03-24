class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = this.right = null;
    }
}

function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
    const stack: TreeNode[] = [root];

    while (stack.length) {
        const node = stack.pop()!;

        if (node.val === p.val || node.val === q.val) return node;

        if (p.val < node.val && q.val < node.val) stack.push(node.left!);
        else if (p.val > node.val && q.val > node.val) stack.push(node.right!); // 👈 бъг фиксиран
        else return node;
    }

    throw new Error("LCA not found");
}