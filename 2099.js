let nums = [2, 1, 3, 3];
let k = 2;

function largestArray(nums, k) {
  const indexed = nums.map((num, idx) => [num, idx]);

  indexed.sort((a, b) => b[0] - a[0]);

  const topK = indexed.slice(0, k);

  topK.sort((a, b) => a[1] - b[1]);

  return topK.map(item => item[0]);
}

console.log(largestArray(nums, k));
