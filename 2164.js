let nums = [4, 1, 2, 3];

function sort(nums) {
  let odd = [];
  let even = [];
  let result = [];

  for (i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }

  odd.sort((a, b) => b - a);
  even.sort((a, b) => a - b);

  const n = Math.max(odd.length, even.length);

  for (let i = 0; i < n; i++) {
    if (i < even.length) result.push(even[i]);
    if (i < odd.length) result.push(odd[i]);
  }

  return result;
}

console.log(sort(nums));
