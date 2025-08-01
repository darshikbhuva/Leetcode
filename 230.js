function kthSmallest(root, k) {
  let count = 0;
  let result = null;

  function inOrder(node) {
    if (!node || result !== null) return;

    inOrder(node.left);

    count++;
    if (count === k) {
      result = node.val;
      return;
    }

    inOrder(node.right);
  }

  inOrder(root);
  return result;
}
