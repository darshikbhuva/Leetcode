let nums = [
  8154, 9139, 8194, 3346, 5450, 9190, 133, 8239, 4606, 8671, 8412, 6290,
];

function count(nums) {
  let map = new Map();
  nums = nums.sort((a, b) => a - b);

  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
  }

  if (map.size === 0) {
    return -1;
  }

  console.log(map);

  let max = 0;
  let maxIndex = undefined;

  map.forEach((value, index) => {
    if (value > max) {
      max = value;
      maxIndex = index;
    }
  });

  return maxIndex;
}

console.log(count(nums));
