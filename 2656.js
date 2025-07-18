(nums = [5, 5, 5]), (k = 2);

function maxSum(nums, k) {
  let a = Math.max(...nums);
  return (k / 2) * (2 * a + (k - 1));
}

console.log(maxSum(nums, k));
