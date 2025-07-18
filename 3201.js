let nums = [1, 2, 3, 4];

function maximumLength(nums) {
  let odd = 0;
  let even = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  let parity = nums[0] % 2;
  let alternative = 0;

  for (let i = 1; i < nums.length; i++) {
    let currParity = nums[i] % 2;
    if (currParity != parity) {
      alternative++;
      parity = currParity;
    }
  }

  return Math.max(odd, even, alternative);
}

console.log(maximumLength(nums));
