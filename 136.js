let nums = [2, 2, 1];

function singleElement(nums) {
  let result = 0;

  for (let num of nums) {
    result ^= num;
  }

  return result;
}

console.log(singleElement(nums));
