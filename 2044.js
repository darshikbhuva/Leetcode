let nums = [3, 2, 1, 5];

function countMaxOrSubsets(nums) {
  let maxOR = 0;
  let count = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    maxOR |= nums[i];
  }

  function dfs(index, currOR) {
    if (index === n) {
      if (currOR === maxOR) count++;
      return;
    }

    // Include nums[index]
    dfs(index + 1, currOR | nums[index]);

    // Exclude nums[index]
    dfs(index + 1, currOR);
  }
  dfs(0, 0);
  return count;
}

console.log(countMaxOrSubsets(nums));
