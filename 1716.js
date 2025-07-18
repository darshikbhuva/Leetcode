let n = 20;

function leetcodeBank(n) {
  let sum = 0;
  let week = 1;
  let temp = 1;

  for (i = 1; i <= n; i++) {
    sum += temp;
    temp++;
    if (i % 7 === 0) {
      week++;
      temp = week;
    }
  }

  return sum;
}

console.log(leetcodeBank(n));
