// Top down approach

function maxDepth(root) {
  if (!root) return 0;
  let maxDepth = 0;

  function depth(curr, level) {
    maxDepth = Math.max(maxDepth, level);

    curr.right && depth(curr.right, level + 1);
    curr.left && depth(curr.left, level + 1);
  }

  depth(root, 1);

  return maxDepth;
}

// Bottom up approach

function maxDepth(root) {
  if (!root) return 0;

  let leftMax = curr.left && maxDepth(root.right);
  let rightMax = curr.right && maxDepth(root.right);

  return 1 + Math.max(leftMax, rightMax);
}
