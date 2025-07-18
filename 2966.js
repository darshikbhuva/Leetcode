let nums = [17, 15, 20, 16, 15, 10, 20, 19, 17];
let k = 2;

function arr(nums, k) {
  nums = nums.sort((a, b) => a - b);
  console.log(nums);

  let res = [];

  for (let i = 0; i <= nums.length - 3; i++) {
    let temp = [nums[i], nums[i + 1], nums[i + 2]];
    let min = temp[0];
    let max = temp[2];

    if (max - min <= k) {
      res.push(temp);
      i += 2;
    } else {
      res = [];
      break;
    }
  }

  return res;
}

console.log(arr(nums, k));
