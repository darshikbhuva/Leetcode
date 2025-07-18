(nums = [1, 2, 3, 4, 0]), (index = [0, 1, 2, 3, 0]);

function targetArray(nums, index) {
  let target = [];

  for (i = 0; i < index.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }

  return target;
}

console.log(targetArray(nums, index));
