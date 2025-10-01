let nums = [1, 2, 1, 2, 1, 1, 1];

function maxLength(nums) {
  for (let i = 0; i < nums.length; i++) {
    let temp = [];
    max = -Infinity;
    for (let j = i; j < nums.length; j++) {
      temp.push(nums[j]);
    }
    if (prod(temp) === gcdOfArray(temp) * lcmOfArray(temp)) {
      max = Math.max(temp.length, max);
    }
  }

  return max;
}

function prod(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
function gcdOfArray(arr) {
  return arr.reduce((acc, num) => gcd(acc, num));
}
function lcmOfArray(arr) {
  return arr.reduce((acc, num) => lcm(acc, num), 1);
}
console.log(maxLength(nums));
