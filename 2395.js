nums = [1, 2, 4, 8];
function equalSum(nums) {
  let set = new Set();

  for (i = 0; i < nums.length - 1; i++) {
    let sum = 0;
    sum += nums[i];
    sum += nums[i + 1];
    if (set.has(sum)) {
      return true;
    } else {
      set.add(sum);
    }
  }

  return false;
}

console.log(equalSum(nums));
