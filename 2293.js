let nums = [70, 38, 21, 22];

function minMaxGame(nums) {
  let count = 0;
  function solve(nums, count) {
    let temp = [];

    if (nums.length === 1) {
      return nums[0];
    }

    for (i = 0; i < nums.length - 1; i += 2) {
      if (count % 2 === 0) {
        temp.push(Math.min(nums[i], nums[i + 1]));
      } else {
        temp.push(Math.max(nums[i], nums[i + 1]));
      }
      count++;
    }

    return solve(temp, count);
  }

  return solve(nums, count);
}

console.log(minMaxGame(nums));
