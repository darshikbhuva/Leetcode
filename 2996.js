nums = [1, 2, 3, 5, 6];

function sum(nums) {
  let sum = nums[0];
  for (i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      sum += nums[i];
    } else {
      break;
    }
  }

  let set = new Set(nums);

  while (set.has(sum)) {
    sum++;
  }

  return sum;
}

console.log(sum(nums));
