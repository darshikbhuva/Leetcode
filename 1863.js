let nums = [1, 3];

function xor(nums) {
  let sum = 0;

  function dfs(index, currXOR) {
    if (index >= nums.length) {
      sum += currXOR;
      return;
    }

    // Include nums[idx]
    dfs(index + 1, currXOR ^ nums[index]);

    // Exclude nums[idx]
    dfs(index + 1, currXOR);
  }

  dfs(0, 0);

  return sum;
}

console.log(xor(nums));
