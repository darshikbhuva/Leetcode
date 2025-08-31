let n = 4;
let k = 2;

function combine(n, k) {
  let result = [];
  let backtracking = (path, start) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      backtracking(path, i + 1);
      path.pop();
    }
  };

  backtracking([], 1);

  return result;
}

console.log(combine(n, k));
