(nums = [3, 2, 1, 5, 6, 4]), (k = 2);

function kLargestElement(nums) {
  let pq = new MinPriorityQueue(); //leetcode inbuilt method

  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);
    if (pq.size() > k) {
      pq.dequeue();
    }
  }

  return pq.front();
}

console.log(kLargestElement(nums));
