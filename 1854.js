let logs = [
  [1993, 1999],
  [2000, 2010],
];

function maximumPopulation(logs) {
  let arr = Array(101).fill(0);

  for (const [b, d] of logs) {
    arr[b - 1950]++;
    arr[d - 1950]--;
  }

  let living = 0,
    maxL = 0,
    ans = 1950;

  for (let i = 0; i < 101; i++) {
    living += arr[i];
    if (living > maxL) {
      maxL = living;
      ans = 1950 + i;
    }
  }

  return ans;
}

console.log(maximumPopulation(logs));
