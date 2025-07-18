function subsets(nums) {
  const result = [];

  function backtrack(start = 0, path = []) {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack();
  return result;
}

let nums = [1, 2, 3, 4];
console.log(subsets(nums));
