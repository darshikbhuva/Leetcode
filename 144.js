//Recursive approach
var preorderTraversal = function (root) {
  let ans = [];

  function traverse(curr) {
    if (!curr) return;
    ans.push(curr.val);
    traverse(curr.left);
    traverse(curr.right);
  }
  traverse(root);
  return ans;
};

//Iterative approach
var preorderTraversal = function (root) {
  if (!root) return [];
  let ans = [];
  let stack = [root];

  while (stack.length) {
    let curr = stack.pop();
    ans.push(curr.val);

    curr.right && stack.push(curr.right);
    curr.left && stack.push(curr.left);
  }

  return ans;
};
