let cost = [10, 15, 20];

function minCostClimbingStairs(cost) {
  let dp = [0, 0];

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[cost.length];
}

console.log(minCostClimbingStairs(cost));
