let tasks = [
  [1, 6],
  [2, 3],
];

function earliestTime(tasks) {
  let ans = Infinity;

  for (let [s, f] of tasks) {
    ans = Math.min(s + f, ans);
  }

  return ans;
}

console.log(earliestTime(tasks));
