let nums = [3, 4, 5, 1, 2];

function shift(nums) {
  let n = nums.length;
  let count = 0;
  let id = 0;

  for (i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      id = i;
      count++;
    }
  }

  if (count > 1) return -1;
  if (id === 0) return 0;

  return nums[n - 1] > nums[0] ? -1 : n - id;
}

console.log(shift(nums));
