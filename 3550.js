let nums = [1, 2, 3];

function small(nums) {
  let res = [];

  for (i = 0; i < nums.length; i++) {
    let sum = 0;

    while (nums[i] > 0) {
      let digit = nums[i] % 10;
      sum += digit;
      nums[i] = Math.floor(nums[i] / 10);
    }

    res.push(sum);
  }

  for (i = 0; i < res.length; i++) {
    if (res[i] === i) {
      return i;
    }
  }

  return -1;
}

console.log(small(nums));
