let prices = [1, 2, 2];
let money = 3;

function buyChoco(prices, money) {
  prices.sort((a, b) => a - b);

  return prices[0] + prices[1] <= money ? money - prices[0] - prices[1] : money;
}

console.log(buyChoco(prices, money));
