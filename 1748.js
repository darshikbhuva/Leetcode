let nums = [1, 2, 3, 2];

function sum(nums) {
  let map = new Map();
  let sum = 0;

  for (i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  console.log(map);

  map.forEach((value, key) => {
    if (value === 1) {
      sum += key;
    }
  });

  return sum;
}

console.log(sum(nums));
