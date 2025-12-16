let nums = [0, 1, 0, 0];

function specialTriplets(nums) {
  const M = 1e9 + 7;
  let leftMap = new Map();
  let rightMap = new Map();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    rightMap.set(nums[i], (rightMap.get(nums[i]) || 0) + 1);
  }

  for (let i = 0; i < nums.length; i++) {
    rightMap.set(nums[i], rightMap.get(nums[i]) - 1);

    let leftCount = leftMap.get(nums[i] * 2) || 0;
    let rightCount = rightMap.get(nums[i] * 2) || 0;

   count = (count + (leftCount * rightCount) % M) % M;

    leftMap.set(nums[i], (leftMap.get(nums[i]) || 0) + 1);
  }

  return count;
}

console.log(specialTriplets(nums));
