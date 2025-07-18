let prices = [10, 1, 1, 6];

function dis(prices) {
  let res = [];

  for (i = 0; i < prices.length; i++) {
    let j = i + 1;
    while (j < prices.length) {
      if (prices[i] >= prices[j]) {
        res.push(prices[i] - prices[j]);
        break;
      }
      j++;
    }

    if (j === prices.length) {
      res.push(prices[i]);
    }
  }

  return res;
}

console.log(dis(prices));
