function maxPathSum(root) {
  let maxSumPath = -Infinity;

  function traverse(curr) {
    if (!curr) return 0;

    let maxLeft = Math.max(0, traverse(curr.left));
    let maxRight = Math.max(0, traverse(curr.right));

    let currMax = curr.val + maxLeft + maxRight;
    maxSumPath = Math.max(currMax, maxSumPath);

    return curr.val + Math.max(maxLeft, maxRight);
  }
  traverse(root);
  return maxSumPath;
}
