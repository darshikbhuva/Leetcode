function insertIntoBST(root, val) {
  if (!root) return new TreeNode(val);

  function traverse(curr, val) {
    if (!curr) return new TreeNode(val);
    if (curr.val > val) {
      curr.left = traverse(curr.left, val);
    } else {
      curr.right = traverse(curr.right, val);
    }

    return curr;
  }
  traverse(root, val);
  return root;
}
