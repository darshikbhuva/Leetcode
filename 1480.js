nums = [1, 2, 3, 4];

function sum(nums) {
  let result = [];
  // result.push(nums[0]);
  let sum = 0;

  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }

  return result;
}

console.log(sum(nums));
