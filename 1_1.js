let nums = [3, 2, 4];
let target = 6;

let twoSum = function (nums, target) {
  let arr = [];

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i);
        arr.push(j);
      }
    }
  }
  return arr;
};

console.log(twoSum(nums, target));
