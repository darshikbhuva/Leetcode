let nums = [10, 20, 30, 40, 50, 60];
let target = 1;

function threeSumClosest(nums, target) {
  let sum = 0;
  let diff = Infinity;
  let ans = 0;
  nums = nums.sort((a, b) => a - b);

  for (i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        ans = sum;
        return ans;
      } else if (sum < target) {
        if (Math.abs(target - sum) < diff) {
          diff = target - sum;
          ans = sum;
        }
        left++;
      } else {
        if (Math.abs(sum - target) < diff) {
          diff = sum - target;
          ans = sum;
        }
        right--;
      }
    }
  }

  return ans;
}

console.log(threeSumClosest(nums, target));
