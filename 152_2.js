let nums = [2, 3, -2, 4];

function maxProduct(nums) {
  let n = nums.length;
  let leftProd = 1;
  let rightProd = 1;
  let result = -Infinity;

  for (let i = 0; i < n; i++) {
    leftProd = leftProd * nums[i];
    rightProd = rightProd * nums[n - i - 1];
    result = Math.max(result, leftProd, rightProd);
    if (leftProd === 0) leftProd = 1;
    if (rightProd === 0) rightProd = 1;
  }

  return result;
}

console.log(maxProduct(nums));
