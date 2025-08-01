// Recursive approach
var inorderTraversal = function (root) {
  let ans = [];

  function traverse(curr) {
    if (!curr) return;
    traverse(curr.left);
    ans.push(curr.val);
    traverse(curr.right);
  }
  traverse(root);
  return ans;
};

// Iterative approach

var inorderTraversal = function (root) {
  if (!root) return [];
  let curr = root;
  let ans = [];
  let stack = [];

  while (stack.length || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }

  return ans;
};
