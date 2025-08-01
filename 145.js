//Recursive approach
function postOrderTraversal(root) {
  let ans = [];

  function traverse(curr) {
    if (!curr) return;
    traverse(curr.left);
    traverse(curr.right);
    ans.push(curr.val);
  }
  traverse(root);
  return ans;
}

//Iterative approach - two stack
function postOrderTraversal(root) {
  if (!root) return [];
  let ans = [];
  let s1 = [root];
  let s2 = [];

  while (s1.length) {
    let curr = s1.pop();
    s2.push(curr);
    curr.left && s1.push(curr.left);
    curr.right && s1.push(curr.right);
  }

  while (s2.length) {
    ans.push(s2.pop().val);
  }

  return ans;
}

//Iterative approach - one stack
function postOrderTraversal(root) {
  let stack = [];
  let curr = root;
  let ans = [];
  let lastVisitedNode = null;

  while (curr || stack.length) {
    //push all values to stack till i reach  leftmost bottom

    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    //peaking top element
    let peek = stack[stack.length - 1];

    //if right exists & it is not the last visited

    if (peek.right && peek.right != lastVisited) {
      curr = peek.right;
    } else {
      ans.push(peek.val);
      lastVisitedNode = stack.pop();
    }
  }

  return ans;
}
