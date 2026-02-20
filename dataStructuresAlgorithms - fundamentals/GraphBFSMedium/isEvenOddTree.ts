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

function isEvenOddTree(root: TreeNode | null): boolean {
    if (!root) return true;

    const queue: TreeNode[] = [root];
    let level = 0;

    while (queue.length > 0) {
        const size: number = queue.length;
        let prevValue: number = level % 2 === 0 ? -Infinity : Infinity;
        const levelIsEven: boolean = level % 2 === 0;

        for (let i = 0; i < size; i++) {
            const node = queue.shift()!;

            if (
                levelIsEven &&
                (node.val % 2 === 0 || node.val <= prevValue)
            ) {
                return false;
            }

            if (
                !levelIsEven &&
                (node.val % 2 !== 0 || node.val >= prevValue)
            ) {
                return false;
            }

            prevValue = node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        level++;
    }

    return true;
}