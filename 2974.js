let nums = [-3, -1, -2, -4];

function cal(nums) {
  nums = nums.sort((a, b) => a - b);

  let result = [];
  let i = 0;

  while (i < nums.length) {
    let temp = nums[i];
    let temp2 = nums[i + 1];

    result.push(temp2);
    result.push(temp);

    i = i + 2;
  }

  return result;
}

console.log(cal(nums));
