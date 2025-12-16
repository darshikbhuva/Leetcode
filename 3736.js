let nums = [2, 1, 3];

function minMoves(nums) {
  let max = Math.max(...nums);
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max) {
      continue;
    } else {
      result += max - nums[i];
    }
  }

  return result;
}

console.log(minMoves(nums));
