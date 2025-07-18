let s = "(()())(())";

function outer(s) {
  let stack = [];
  let ans = "";

  for (i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      if (stack.length > 1) {
        ans += s[i];
      }
    } else {
      if (stack.length > 1) {
        ans += s[i];
      }
      stack.pop();
    }
  }

  return ans;
}

console.log(outer(s));
