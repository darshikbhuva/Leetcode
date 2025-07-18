let digits = [2, 1, 3, 0];

function digitsNum(digits) {
  let frequency = new Array(10).fill(0);

  for (let digit of digits) {
    frequency[digit]++;
  }

  let result = [];

  for (let i = 1; i <= 9; i++) {
    if (frequency[i] === 0) continue;
    frequency[i]--;

    for (let j = 0; j <= 9; j++) {
      if (frequency[j] === 0) continue;
      frequency[j]--;

      for (let k = 0; k <= 8; k += 2) {
        if (frequency[k] === 0) continue;
        frequency[k]--;

        let ans = i * 100 + j * 10 + k;
        result.push(ans);

        frequency[k]++;
      }

      frequency[j]++;
    }

    frequency[i]++;
  }

  return result;
}

console.log(digitsNum(digits));
