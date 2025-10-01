(n = 3),
  (trust = [
    [1, 2],
    [2, 3],
  ]);

function findJudge(n, trust) {
  let score = Array(n + 1).fill(0);

  for (let [a, b] of trust) {
    score[a]--;
    score[b]++;
  }

  for (let i = 1; i <= n; i++) {
    if (score[i] === n - 1) {
      return i;
    }
  }

  return -1;
}

console.log(findJudge(n, trust));
