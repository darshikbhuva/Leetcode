let nums = [1, 3, 2, 3, 3];
let k = 2;

function count(nums, k) {
  let n = nums.length;
  let max = Math.max(...nums);
  let result = 0;
  let i = 0;
  let j = 0;
  let count = 0;

  while (j < n) {
    if (nums[j] === max) {
      count++;
    }

    while (count >= k) {
      result += n - j;

      if (nums[i] === max) {
        count--;
      }
      i++;
    }
    j++;
  }

  return result;
}

console.log(count(nums, k));
