let nums = [1, 3, 2];

function monotonic(nums) {
  let flag1 = false;
  let flag2 = false;
  for (i = 0; i < nums.length - 1; i++) {
    if (!(nums[i] <= nums[i + 1])) {
      flag1 = true;
      break;
    }
  }

  for (i = 0; i < nums.length - 1; i++) {
    if (!(nums[i] >= nums[i + 1])) {
      flag2 = true;
      break;
    }
  }

  if (flag1 && flag2) {
    return false;
  } else {
    return true;
  }
}

console.log(monotonic(nums));
