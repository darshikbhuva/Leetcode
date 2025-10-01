let tasks = ["A", "C", "A", "B", "D", "B"];
let n = 1;

function leastInterval(tasks, n) {
  let map = new Map();

  for (let i = 0; i < tasks.length; i++) {
    map.set(tasks[i], (map.get(tasks[i]) || 0) + 1);
  }

  let arr = [...map.values()];
  arr = arr.sort((a, b) => b - a);

  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[0]) {
      count++;
    }
  }

  return Math.max(tasks.length, (n + 1) * (arr[0] - 1) + count);
}
console.log(leastInterval(tasks, n));
