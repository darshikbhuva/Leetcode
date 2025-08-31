(nums = [0, 0]), (k = 1);

function largestInteger(nums, k) {
  let freq = new Map();
  let n = nums.length;

  // Edge case
  if (n === k) {
    return Math.max(...nums);
  }

  // Count occurrences in subarrays of size k
  for (let i = 0; i <= n - k; i++) {
    for (let j = 0; j < k; j++) {
      let num = nums[i + j];
      freq.set(num, (freq.get(num) || 0) + 1);
    }
  }

  // Find largest integer appearing exactly once
  let res = -1;
  for (let [num, count] of freq.entries()) {
    if (count === 1) {
      res = Math.max(res, num);
    }
  }

  return res;
}

console.log(largestInteger(nums, k));
