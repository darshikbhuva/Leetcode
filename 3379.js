let nums = [-9, 0];

function constructTransformedArray(nums) {
  let result = new Array(nums.length).fill(0);
  let arr = [...nums, ...nums, ...nums];

  for (let i = nums.length; i < arr.length - Math.floor(arr.length / 3); i++) {
    if (arr[i] > 0) {
      result[i - nums.length] = arr[i + (arr[i] % nums.length)];
    } else if (arr[i] < 0) {
      result[i - nums.length] = arr[i - (Math.abs(arr[i]) % nums.length)];
    } else {
      result[i - nums.length] = arr[i];
    }
    1;
  }

  return result;
}

console.log(constructTransformedArray(nums));
