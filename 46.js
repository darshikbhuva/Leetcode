let nums = [1, 2, 3];

function permute(nums) {
  let result = [];

  const backtracking = (path, start) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        backtracking(path);
        path.pop();
      }
    }
  };

  backtracking([]);

  return result;
}

console.log(permute(nums));
