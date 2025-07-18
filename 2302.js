nums = [9, 5, 3, 8, 4, 7, 2, 7, 4, 5, 4, 9, 1, 4, 8, 10, 8, 10, 4, 7];
k = 4;

function score(nums, k) {
  let n = nums.length;
  let result = 0;
  let sum = 0;

  let i = 0;
  let j = 0;

  while (j < n) {
    sum += nums[j];

    if (i <= j && sum * (j - i + 1) >= k) {
      sum -= nums[i];
      i++;
    }

    result += j - i + 1;
    j++;
  }

  return result;
}

console.log(score(nums, k));
