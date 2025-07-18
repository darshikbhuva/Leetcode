let num = 2932;

function minSort(nums) {
  nums = String(nums);
  nums = nums.split("");
  nums = nums.sort((a, b) => a - b);

  n1 = Number(nums[0] * 10) + Number(nums[nums.length - 1]);
  n2 = Number(nums[1] * 10) + Number(nums[nums.length - 2]);

  return n1 + n2;
}

console.log(minSort(num));
