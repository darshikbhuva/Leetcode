let cost = [1, 2, 4, 6, 7];

function minCosts(cost) {
  for (let i = 1; i < cost.length; i++) {
    cost[i] = Math.min(cost[i], cost[i - 1]);
  }

  return cost;
}

console.log(minCosts(cost));
