let nums = [1, 1, 0, 1, 1, 1];

function count(nums) {
  let count = 0;
  let max = -Infinity;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }

  return max;
}

console.log(count(nums));
