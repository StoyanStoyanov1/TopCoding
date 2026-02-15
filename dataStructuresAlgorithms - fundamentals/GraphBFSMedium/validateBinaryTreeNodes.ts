function validateBinaryTreeNodes(
    n: number,
    leftChild: number[],
    rightChild: number[]
): boolean {
    const setNodes: Set<number> = new Set(leftChild);

    for (const rightNode of rightChild) {
        if (rightNode !== -1 && setNodes.has(rightNode)) return false;
    }

    const totalNodes: Set<number> = new Set([...leftChild, ...rightChild]);

    const used = Array.from(totalNodes).filter(x => x !== -1).length;

    return n - 1 === used;
}