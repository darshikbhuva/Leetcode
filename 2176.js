(nums = [1, 2, 3, 4]), (k = 1);

function countEqual(nums, k) {
  let count = 0;

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        count++;
      }
    }
  }

  return count;
}

console.log(countEqual(nums, k));
