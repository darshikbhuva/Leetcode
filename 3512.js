let nums = [3, 9, 7];
let k = 5;

function divisible(nums, k) {
  let sum = 0;

  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum % k;
}

console.log(divisible(nums, k));
