let nums = [0];

function zero(nums) {
  const minSet = new Set(nums);

  if (minSet.has(0)) return minSet.size - 1;
  return minSet.size;
}

console.log(zero(nums));
