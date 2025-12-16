let nums = [3, -1, 0, 2];
let k = 3;

function largestSumAfterKNegations(nums, k) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length && k > 0; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i];
      k--;
    }
  }

  if (k % 2 === 1) {
    nums.sort((a, b) => a - b);
    nums[0] = -nums[0];
  }

  return nums.reduce((acc, item) => acc + item, 0);
}

console.log(largestSumAfterKNegations(nums, k));
