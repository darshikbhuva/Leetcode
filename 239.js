let nums = [1];
let k = 1;

function maxSlidingWindow(nums, k) {
  let res = [];
  let que = [];

  let i = (j = 0);

  while (j < nums.length) {
    while (que.length && nums[j] > que[que.length - 1]) {
      que.pop();
    }
    que.push(nums[j]);

    if (j >= k - 1) {
      res.push(que[0]);

      nums[i] === que[0] && que.shift();
      i++;
    }
    j++;
  }

  return res;
}

console.log(maxSlidingWindow(nums, k));
