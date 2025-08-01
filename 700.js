function searchBST(root, val) {
  let ans = null;

  function traverse(curr) {
    if (curr.val === val) {
      ans = curr;
    } else {
      if (curr.val < val) {
        curr.right && traverse(curr.right);
      } else {
        curr.left && traverse(curr.left);
      }
    }
  }
  traverse(root);
  return ans;
}
