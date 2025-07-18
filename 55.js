let nums = [3, 2, 1, 0, 4];

function jumpGame(nums) {
  let n = nums.length - 1;

  for (i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= n) {
      n = i;
    }
  }

  return n === 0;
}

console.log(jumpGame(nums));
