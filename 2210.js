let nums = [2, 4, 1, 1, 6, 5];

function countHillValley(nums) {
  let count = 0;

  for (i = 1; i < nums.length - 1; i++) {
    let j = i - 1;
    let k = i + 1;
    if (nums[i] === nums[j]) {
      continue;
    }

    while (nums[j] === nums[i]) {
      j--;
    }

    while (nums[k] === nums[i]) {
      k++;
    }

    if (
      (nums[j] > nums[i] && nums[k] > nums[i]) ||
      (nums[j] < nums[i] && nums[k] < nums[i])
    ) {
      count++;
    }
  }

  return count;
}

console.log(countHillValley(nums));
