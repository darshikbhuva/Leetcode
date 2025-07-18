let nums = [1, 2, 3, 1];

function isContainDuplicate(nums) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
    // console.log(seen);
  }

  return false;
}

console.log(isContainDuplicate(nums));
