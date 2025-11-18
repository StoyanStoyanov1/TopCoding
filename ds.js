var leafSimilar = function(root1, root2) {
    const arr1 = [];
    const arr2 = [];

    dfs(root1, arr1);
    dfs(root2, arr2);

    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
};

function dfs(node, arr) {
    if (!node) return;
    if (!node.left && !node.right) arr.push(node.val);

    dfs(node.left);
    dfs(node.right);
}