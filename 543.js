var diameterOfBinaryTree = function (root) {
  let maxDepth = 0;

  function findMaxDepth(curr) {
    if (!curr) return 0;

    let leftDepth = findMaxDepth(curr.left);
    let rightDepth = findMaxDepth(curr.right);

    let currDepth = leftDepth + rightDepth;
    maxDepth = Math.max(currDepth, maxDepth);

    return 1 + Math.max(leftDepth, rightDepth);
  }
  findMaxDepth(root);
  return maxDepth;
};
