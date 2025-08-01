function lowestCommonAncestor(root, p, q) {
  let lca = null;

  let traversal = (curr) => {
    if (!curr) return 0;
    let count = 0;

    let ansOnLeft = traversal(curr.left);
    let ansOnRight = traversal(curr.right);

    if (curr.val === p.val || curr.val === q.val) {
      count++;
    }

    count += ansOnLeft + ansOnRight;

    if (count === 2 && !lca) {
      lca = curr;
    }

    return count;

    count += ansOnLeft + ansOnRight;
  };
  traversal(root);
  return lca;
}
