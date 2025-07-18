let nums = [1, 2, 4];
let k = 5;

function freq(nums, k) {
  nums = nums.sort((a, b) => a - b);
}

console.log(freq(nums, k));
