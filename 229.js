let nums = [1, 2];

function count(nums) {
  let map = new Map();
  let ans = [];
  let max = Math.floor(nums.length / 3);

  for (i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  map.forEach((index, value) => {
    if (index > max) {
      ans.push(value);
    }
  });

  return ans;
}

console.log(count(nums));
