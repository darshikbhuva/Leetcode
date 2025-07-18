let accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];

function richest(accounts) {
  //Approach - 1
  let rich = -Infinity;

  for (i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    if (sum > rich) {
      rich = sum;
    }
  }

  return rich;

  //Approach - 2
  // return Math.max(...accounts.map(customer => customer.reduce((sum, bank) => sum + bank, 0)));
}

console.log(richest(accounts));
