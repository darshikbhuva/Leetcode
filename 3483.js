let digits = [1, 3, 5];

function totalNumbers(digits) {
  const result = new Set();

  const backtracking = (path, remaining) => {
    if (path.length === 3) {
      let tempnum = Number(path.join(""));
      if (tempnum % 2 === 0) {
        result.add(tempnum);
      }
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      if (path.length === 0 && remaining[i] === 0) continue;
      path.push(remaining[i]);
      backtracking(path, [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
      path.pop();
    }
  };

  backtracking([], digits);

  return result.size;
}

console.log(totalNumbers(digits));
