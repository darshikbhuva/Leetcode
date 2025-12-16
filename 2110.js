let prices = [3, 2, 1, 4];

function getDescentPeriods(prices) {
  let count = 1;
  let result = 1;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] - prices[i] === 1) {
      count++;
    } else {
      count = 1;
    }

    result += count;
  }

  return result;
}

console.log(getDescentPeriods(prices));
