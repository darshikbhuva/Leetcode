(nums = [2, 7, 9]), (original = 4);

function findFinalValue(nums, original) {
  let data = new Map();
  let max = Math.max(...nums);

  for (let i = 0; i < nums.length; i++) {
    data.set(nums[i], nums[i]);
  }

  while (original <= max) {
    if (data.has(original)) {
      original = original * 2;
    } else {
      return original;
    }
  }

  return original;
}

function findFinalValue(nums, original) {
  while (nums.includes(original)) {
    original = original * 2;
  }
  return original;
}

console.log(findFinalValue(nums, original));
