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

function maxLevelSum(root: TreeNode | null): number {
    if (!root) return 0;

    const arr: TreeNode[] = [root];
    const result: [number, number] = [root.val, 1]; // [maxSum, level]

    let level = 1;

    while (arr.length > 0) {
        const nextLevel: TreeNode[] = [];
        let sum = 0;

        for (const node of arr) {
            sum += node.val;
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        }

        if (sum > result[0]) {
            result[0] = sum;
            result[1] = level;
        }

        arr.length = 0;
        arr.push(...nextLevel);
        level++;
    }

    return result[1];
}