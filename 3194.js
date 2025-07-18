let nums = [7, 8, 3, 4, 15, 13, 4, 1];

function average(nums) {
  let min = Infinity;

  nums = nums.sort((a, b) => a - b);
  while (nums.length > 0) {
    let avg = (nums[0] + nums[nums.length - 1]) / 2;
    min = Math.min(avg, min);
    nums.splice(0, 1);
    nums.splice(nums.length - 1, 1);
  }

  return min;
}

console.log(average(nums));
