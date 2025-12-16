let nums = [1, 2, 0];

function firstMissingPositive(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], nums[i]);
  }

  for (let i = 1; i <= 2 ** 31; i++) {
    if (!map.has(i)) {
      return i;
    }
  }
}

console.log(firstMissingPositive(nums));
