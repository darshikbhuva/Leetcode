function minQueriesToZero(nums, queries) {
  const n = nums.length;
  let left = 0,
    right = queries.length,
    result = -1;

  function isPossible(k) {
    let arr = [...nums];
    let diff = new Array(n + 1).fill(0);

    for (let i = 0; i < k; i++) {
      let [li, ri, vali] = queries[i];
      diff[li] -= vali;
      diff[ri + 1] += vali;
    }

    let currDecrement = 0;
    for (let i = 0; i < n; i++) {
      currDecrement += diff[i];
      if (arr[i] + currDecrement > 0) {
        return false;
      }
    }
    return true;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (isPossible(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}
