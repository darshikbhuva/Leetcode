let nums = [3, 4, 5, 2];

function product(nums) {
  n = nums.length;
  nums = nums.sort((a, b) => a - b);

  return (nums[n - 1] - 1) * (nums[n - 2] - 1);

  // approch 2

  // let max1 = 0, max2 = 0;

  // for (let num of nums) {
  //   if (num > max1) {
  //     max2 = max1;
  //     max1 = num;
  //   } else if (num > max2) {
  //     max2 = num;
  //   }
  // }

  // return (max1 - 1) * (max2 - 1);
}

console.log(product(nums));
