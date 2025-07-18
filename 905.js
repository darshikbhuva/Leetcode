let nums = [3, 1, 2, 4];

function sortArrayByParity(nums) {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;

  for (const num of nums) {
    if (num % 2 === 0) {
      result[left++] = num;
    } else {
      result[right--] = num;
    }
  }

  return result;
}

console.log(parity(nums));
