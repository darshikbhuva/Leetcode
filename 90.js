var subsets = function (nums) {
  let result = new Set();

  nums.sort((a, b) => a - b);

  function solve(idx, temp) {
    if (idx >= nums.length) {
      result.add(JSON.stringify(temp));
      return;
    }

    // Include nums[idx]
    temp.push(nums[idx]);
    solve(idx + 1, temp);

    // Exclude nums[idx]
    temp.pop();
    solve(idx + 1, temp);
  }

  solve(0, []);

  return Array.from(result).map(JSON.parse);
};

let nums = [1, 2, 2];
console.log(subsets(nums));

//backtracking

function subsets(nums) {
  let result = new Set();
  nums = nums.sort((a, b) => a - b);

  const backtracking = (path, start) => {
    if (result.has(JSON.stringify(path))) {
      return;
    } else {
      result.add(JSON.stringify(path));
    }

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(path, i + 1);
      path.pop();
    }
  };

  backtracking([], 0);

  return Array.from(result).map(JSON.parse);
}
