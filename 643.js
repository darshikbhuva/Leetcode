let nums = [1, 12, -5, -6, 50, 3];
let k = 4;

function maxArray(nums, k) {
  let firstWindow = 0;

  for (let i = 0; i < k; i++) {
    firstWindow += nums[i];
  }

  let maxAvg = firstWindow / k;

  for (let j = k; j < nums.length; j++) {
    firstWindow += nums[j] - nums[j - k];
    maxAvg = Math.max(maxAvg, firstWindow / k);
  }

  return maxAvg;
}

console.log(maxArray(nums, k));
