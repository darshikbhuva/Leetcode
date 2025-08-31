let s = "loveleetcode";
let c = "e";

function shortestToChar(s, c) {
  let n = s.length;
  let ans = new Array(n).fill(Infinity);

  let prev = -Infinity;
  for (let i = 0; i < n; i++) {
    if (s[i] === c) prev = i;
    ans[i] = Math.abs(i - prev);
  }

  prev = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) prev = i;
    ans[i] = Math.min(ans[i], Math.abs(i - prev));
  }

  return ans;
}

console.log(shortestToChar(s, c));
