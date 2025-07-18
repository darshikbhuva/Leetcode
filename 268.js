let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function count(nums) {
  let sum = 0;
  let sum2 = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += i + 1;
    sum2 += nums[i];
  }

  return sum - sum2;
}

console.log(count(nums));
