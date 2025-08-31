(k = 4), (n = 1);

function combinationSum3(k, n) {
  let result = [];

  const backtracking = (path, remaining, start) => {
    if (path.length === k && remaining === 0) {
      result.push([...path]);
      return;
    }
    for (let i = start; i <= 9; i++) {
      path.push(i);
      backtracking(path, remaining - i, i + 1);
      path.pop();
    }
  };
  backtracking([], n, 1);

  return result;
}

console.log(combinationSum3(k, n));
