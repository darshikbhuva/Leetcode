let nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let target = 1;
let start = 0;

function targetEle(nums, target, start) {
  let min = [];

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      min.push(Math.abs(i - start));
    }
  }

  return Math.min(...min);
}

console.log(targetEle(nums, target, start));
