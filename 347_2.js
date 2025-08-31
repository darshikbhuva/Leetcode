let nums = [3, 0, 1, 0];
let k = 1;

function count(nums, k) {
  let map = new Map();

  for (i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  let pq = new MinPriorityQueue((x) => x.freq);

  for (let [ele, fre] in map) {
    pq.enqueue({ val: ele, freq: fre });
    if (pq.size() > k) {
      pq.dequeue();
    }
  }

  return pq.toArray().map((x) => Number(x.element.val));
}

console.log(count(nums, k));
