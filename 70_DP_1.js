let n = 2;

function climbStairs(n) {
  let dp = {};

  if (n <= 2) {
    return n;
  }

  if (!dp[n]) {
    dp[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }

  return dp[n];
}

console.log(climbStairs(n));
