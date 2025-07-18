let nums = [1, 5, 1, 4, 2];

function transform(nums) {
  return nums.map((num) => (num % 2 === 0 ? 0 : 1)).sort((a, b) => a - b);
}

console.log(transform(nums));
