let nums = [1, 2, 3];

function product(nums) {
  nums = nums.sort((a, b) => a - b);
  let n = nums.length - 1;

  const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const product2 = nums[0] * nums[1] * nums[n - 1];

  return Math.max(product1, product2);
}

console.log(product(nums));
