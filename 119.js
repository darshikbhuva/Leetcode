let rowIndex = 3;

function generate(rowIndex) {
  let res = new Array(rowIndex + 1).fill(0);
  res[0] = 1;

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      res[j] = res[j] + res[j - 1];
    }
  }

  return res;
}

console.log(generate(rowIndex));
