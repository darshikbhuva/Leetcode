let nums = [2, 2, 4, 5];
let k = 0;

function partition(nums) {
  nums = nums.sort((a, b) => a - b);
  let count = 1;

  let i = 0;
  let j = i + 1;

  while (j < nums.length) {
    if (nums[j] - nums[i] <= k) {
      j++;
    } else {
      count++;
      i = j;
      j = i + 1;
    }
  }

  return count;
}

console.log(partition(nums));
