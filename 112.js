// Top Down approach
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let ans = false;

  function traverse(curr, currSum) {
    let newSum = currSum + curr.val;
    if (!curr.left && !curr.right) {
      if (newSum === targetSum) {
        ans = ans || true;
      }
    }

    curr.left && traverse(curr.left, newSum);
    curr.right && traverse(curr.right, newSum);
  }

  traverse(root, 0);

  return ans;
};

//Bottom up  approach
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  let remaining = targetSum - root.val;
  return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
};
