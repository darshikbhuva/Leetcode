let nums = [4, 1, 5, 2, 3];

function isTrionic(nums) {
  let inc1 = false;
  let dec = false;
  let inc2 = false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1] && !inc2 && !dec) {
      inc1 = true;
    } else if (nums[i] < nums[i + 1] && inc1 && dec) {
      inc2 = true;
    } else if (nums[i] > nums[i + 1] && inc1 && !inc2) {
      dec = true;
    } else {
      return false;
    }
  }

  return inc1 && dec && inc2;
}

console.log(isTrionic(nums));
