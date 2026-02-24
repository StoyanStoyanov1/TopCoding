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

function amountOfTime(root: TreeNode | null, start: number): number {
    const graph: Map<number, number[]> = new Map();

    function buildGraph(node: TreeNode | null): void {
        if (!node) return;

        if (!graph.has(node.val)) {
            graph.set(node.val, []);
        }

        if (node.left) {
            if (!graph.has(node.left.val)) {
                graph.set(node.left.val, []);
            }

            graph.get(node.val)!.push(node.left.val);
            graph.get(node.left.val)!.push(node.val);
        }

        if (node.right) {
            if (!graph.has(node.right.val)) {
                graph.set(node.right.val, []);
            }

            graph.get(node.val)!.push(node.right.val);
            graph.get(node.right.val)!.push(node.val);
        }

        buildGraph(node.left);
        buildGraph(node.right);
    }

    buildGraph(root);

    const visited: Set<number> = new Set([start]);
    let result = 0;

    function dfsTime(node: number, time: number): void {
        result = Math.max(result, time);

        for (const nei of graph.get(node) ?? []) {
            if (!visited.has(nei)) {
                visited.add(nei);
                dfsTime(nei, time + 1);
            }
        }
    }

    dfsTime(start, 0);

    return result;
}