let nums = [8, 1, 2, 2, 3];

function minimumNumber(nums) {
  let sorted = [...nums].sort((a, b) => a - b);
  let map = new Map();

  for (i = 0; i < sorted.length; i++) {
    if (!map.has(sorted[i])) {
      map.set(sorted[i], i);
    }
  }

  return nums.map((num) => map.get(num));
}

console.log(minimumNumber(nums));
