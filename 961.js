let nums = [1, 2, 3, 3];

function repeatedEle(nums) {
  let map = new Map();
  let x = nums.length;
  let freq = x / 2;
  let res = 0;

  for (i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  map.forEach((index, value) => {
    if (index >= freq) {
      res = value;
    }
  });

  return res;
}

function repeatedEle(nums) {
  let lookup = new Set();

  for (let n of nums) {
    if (lookup.has(n)) return n;
    lookup.add(n);
  }

  return -1;
}

console.log(repeatedEle(nums));
