let nums = [999, 19, 199];

function minElement(nums) {
  let arr = [];

  for (i = 0; i < nums.length; i++) {
    let sum = 0;
    while (nums[i] > 0) {
      let digit = nums[i] % 10;
      sum += digit;
      nums[i] = Math.floor(nums[i] / 10);
    }
    arr.push(sum);
  }

  return Math.min(...arr);
}

console.log(minElement(nums));
