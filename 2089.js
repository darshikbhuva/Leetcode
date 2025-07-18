let nums = [1, 2, 5, 2, 3];
let target = 2;

function find(nums, target) {
  let res = [];
  nums = nums.sort((a, b) => a - b);

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res.push(i);
    }
  }

  return res;
}

console.log(find(nums, target));
