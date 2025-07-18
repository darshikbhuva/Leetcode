(costs = [1, 6, 3, 1, 2, 5]), (coins = 20);

function maxIceCream(costs, coins) {
  costs = costs.sort((a, b) => a - b);

  let sum = 0;
  let count = 0;

  for (i = 0; i < costs.length; i++) {
    if (coins > 0 && costs[i] <= coins) {
      count++;
      sum += costs[i];
      coins -= costs[i];
    }
  }

  return count;
}

console.log(maxIceCream(costs, coins));
