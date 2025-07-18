let nums = [1, 3, 2, 1, 5, 4];
let k = 2;

function good(nums, k) {
  let sum = 0;

  for (i = 0; i < nums.length; i++) {
    if (
      (typeof nums[i + k] === "undefined" || nums[i + k] < nums[i]) &&
      (typeof nums[i - k] === "undefined" || nums[i - k] < nums[i])
    ) {
      sum += nums[i];
    }
  }

  return sum;
}

console.log(good(nums, k));
