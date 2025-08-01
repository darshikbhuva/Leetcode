function isSubtree(root, subRoot) {
  let tree = serialization(root);
  let subTree = serialization(subRoot);

  return tree.includes(subTree);
}

const serialization = function (root) {
  let hash = "";

  function traverse(curr) {
    if (!curr) {
      hash = hash + "-#";
      return;
    }
    hash = hash + "-" + curr.val;
    traverse(curr.left);
    traverse(curr.right);
  }
  traverse(root);

  return hash;
};
