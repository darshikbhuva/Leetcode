(nums = [4, 5, 6, 7, 8, 9]), (diff = 2);

function triplets(nums, diff) {
  let count = 0;

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      for (k = j + 1; k < nums.length; k++) {
        if (nums[k] - nums[j] === diff && nums[j] - nums[i] === diff) {
          count++;
        }
      }
    }
  }

  return count;
}

var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  for (let num of nums) {
    if (nums.includes(num + diff) && nums.includes(num + diff * 2)) {
      count++;
    }
  }
  return count;
};

var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  let numSet = new Set(nums);

  for (let num of nums) {
    if (numSet.has(num + diff) && numSet.has(num + 2 * diff)) {
      count++;
    }
  }

  return count;
};

console.log(triplets(nums, diff));
