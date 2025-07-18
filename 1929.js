let nums = [1, 2, 2, 1];

function concatenation(nums) {
  let result = [...nums, ...nums];
  return result;
}

console.log(concatenation(nums));
