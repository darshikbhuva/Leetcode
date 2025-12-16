let nums = [4, 4, 4, 1, 2, 3];
let k = 3;

function sumDivisibleByK(nums, k) {
  let map = new Map();
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (let [ele, val] of map) {
    if (val % k === 0) {
      sum += ele * val;
    }
  }

  return sum;
}

console.log(sumDivisibleByK(nums, k));
