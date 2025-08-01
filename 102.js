//Iterative approach
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let ans = [];

  while (queue.length) {
    let levelArr = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
      levelArr.push(curr.val);
    }

    ans.push(levelArr);
  }

  return ans;
};

// Recursive approach
var levelOrder = function (root) {
  if (!root) return [];
  let ans = [];
  let level = 0;
  function traverse(curr, level) {
    if (!ans[level]) {
      ans[level] = [];
    }

    ans[level].push(curr.val);
    curr.left && traverse(curr.left, level + 1);
    curr.right && traverse(curr.right, level + 1);
  }

  traverse(root, level);
  return ans;
};
