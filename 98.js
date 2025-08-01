function isValidBST(root) {
  let ans = true;

  function isBST(curr, lo, hi) {
    if (!curr) return true;

    if ((lo != null && curr.val <= lo) || (hi != null && curr.val >= hi)) {
      return false;
    }

    let isLeftBST = isBST(curr.left, lo, curr.val);
    let isRightBST = isBST(curr.right, curr.val, hi);

    return isLeftBST && isRightBST;
  }

  return isBST(root, null, null);
}
