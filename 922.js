let nums = [4, 2, 5, 7];

function sortArrayByParityII(nums) {
  let x = 0;
  let j = 1;
  let k = 0;
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      res[x] = nums[i];
      x += 2;
    } else {
      res[j] = nums[i];
      j += 2;
    }
  }

  return res;
}

console.log(sortArrayByParityII(nums));
