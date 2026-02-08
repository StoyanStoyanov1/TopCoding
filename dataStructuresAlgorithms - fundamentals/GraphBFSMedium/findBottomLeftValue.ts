class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function findBottomLeftValue(root: TreeNode): number {
    const queue: TreeNode[] = [root];
    let result: number = root.val;

    while (queue.length) {
        const levelSize = queue.length;
        result = queue[0].val; // първият елемент на текущия ред

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
}