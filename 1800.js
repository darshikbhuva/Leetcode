nums = [1, 100, 2, 99, 3, 98, 4, 97];
function maxSubArray(nums) {
  let sum = 0;
  let max = -Infinity;
  let i = 0;
  let j = 1;

  while (i < nums.length) {
    sum += nums[i];

    if (max < sum) {
      max = sum;
    }

    if (nums[j] > nums[i]) {
      i++;
      j++;
    } else {
      sum = 0;
      i = j;
      j = i + 1;
    }
  }

  return max;
}

console.log(maxSubArray(nums));
