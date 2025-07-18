let nums = [1, 2, 2, 1];

function singleNumberXOR(nums) {
  let map = new Map();

  for (i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  let ans = 0;

  map.forEach((index, value) => {
    if (index === 2) {
      ans ^= value;
    }
  });

  return ans;
}

console.log(singleNumberXOR(nums));
