let nums = [2, 1, 3, 5, 6];
let k = 5;
let multiplier = 2;

function manipulation(nums, k, multiplier) {
  for (let i = 0; i < k; ++i) {
    let index = nums.indexOf(Math.min(...nums));
    nums[index] *= multiplier;
  }
  return nums;
}

console.log(manipulation(nums, k, multiplier));
