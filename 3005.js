let nums = [15];

function frequency(nums) {
  let map = new Map();

  for (i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  let max = 0;
  let count = 0;

  map.forEach((index, value) => {
    console.log(index);

    if (index > max) {
      max = index;
    }
  });

  map.forEach((index, value) => {
    if (index === max) {
      count += index;
    }
  });

  return count;
}

console.log(frequency(nums));
