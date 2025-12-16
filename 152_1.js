let nums = [2, 3, -2, 4];

function maxProduct(nums) {
  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let maxProdCopy = maxProd;
    maxProd = Math.max(maxProd * nums[i], nums[i], minProd * nums[i]);
    minProd = Math.min(maxProdCopy * nums[i], nums[i], minProd * nums[i]);
    result = Math.max(maxProd, minProd, result);
  }

  return result;
}

console.log(maxProduct(nums));
