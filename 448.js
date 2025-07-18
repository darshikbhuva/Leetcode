let nums = [4, 3, 2, 7, 8, 2, 3, 1];

function disArray(nums) {
  let result = [];

  for (i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      continue;
    }

    nums[index] *= -1;
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
}

console.log(disArray(nums));
