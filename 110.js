function isBalanced(root) {
  let ans = true;

  function calHeight(curr) {
    if (!curr) return 0;
    let leftHeight = calHeight(curr.left);
    let rightHeight = calHeight(curr.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      ans = false;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  }
  calHeight(root);
  return ans;
}
