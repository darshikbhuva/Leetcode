let nums = [-100000, -100000];

function findClosestNumber(nums) {
  let res = [];
  let temp = nums;
  nums = nums.map((ele) => Math.abs(ele));
  nums = nums.sort((a, b) => a - b);

  let min = nums[0];
  let i = 0;

  while (min === nums[i]) {
    i++;
  }

  temp = temp.sort((a, b) => a - b);

  return temp[i - 1];
}

console.log(findClosestNumber(nums));
