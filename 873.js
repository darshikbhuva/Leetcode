const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function lenLongestFibSubseq(arr) {
  const n = arr.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  let maxLen = 0;

  for (let i = 2; i < n; i++) {
    let start = 0;
    let end = i - 1;
    while (start < end) {
      let sum = arr[start] + arr[end];
      if (sum < arr[i]) {
        start++;
      } else if (sum > arr[i]) {
        end--;
      } else {
        dp[end][i] = (dp[start][end] || 2) + 1;
        maxLen = Math.max(maxLen, dp[end][i]);
        start++;
        end--;
      }
    }
  }

  return maxLen === 0 ? 0 : maxLen;
}

console.log(lenLongestFibSubseq(arr));
