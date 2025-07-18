let nums = [1, 1, 2, 1, 1];
let k = 3;

function nice(nums, k) {
  let i = 0;
  let j = 0;
  let n = nums.length;
  let result = 0;
  let count = 0;
  let oddCount = 0;

  while (j < n) {
    if (nums[j] % 2 !== 0) {
      oddCount++;
      count = 0;
    }

    while (oddCount === k) {
      count++;

      if (nums[i] % 2 !== 0 && i < n) {
        oddCount--;
      }

      i++;
    }
    result += count;
    j++;
  }

  return result;
}

console.log(nice(nums, k));
