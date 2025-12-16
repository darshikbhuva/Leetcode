let s = "abc";

function countSubstrings(s) {
  let n = s.length;
  let ans = 0;
  let dp = Array.from({ length: n }, () => Array(n).fill(null));

  // Base case - 1 length substring & 2 length substring

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    ans++;
    if (i < n - 1 && s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      ans++;
    }
  }

  // length 3 ... n

  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;

      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        ans++;
      }
    }
  }

  return ans;
}

console.log(countSubstrings(s));
