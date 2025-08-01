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
