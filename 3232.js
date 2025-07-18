let nums = [1, 2, 3, 4, 10];

function canWon(nums) {
  nums = nums.sort((a, b) => a - b);

  let sum1 = 0;
  let sum2 = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] < 10) {
      sum1 += nums[i];
    } else {
      sum2 += nums[i];
    }
  }

  if (sum1 === sum2) {
    return false;
  } else {
    return true;
  }
}

console.log(canWon(nums));
