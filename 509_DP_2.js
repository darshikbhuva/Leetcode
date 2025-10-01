let n = 2;

// Bottom-up approach
// Tabulation method
// Iteration method
// Time complexity : O(n)

function fib(n) {
  let dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(fib(n));
