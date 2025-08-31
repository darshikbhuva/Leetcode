var subsets = function (nums) {
  const result = [];

  function solve(idx, temp) {
    if (idx >= nums.length) {
      result.push([...temp]);
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

  return result;
};

//backtracking
function subsets(nums) {
  let result = [];

  const backtracking = (path, start) => {
    path.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(path, i + 1);
      path.pop();
    }
  };
  backtracking([], 0);

  return result;
}
