let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

function trap(height) {
  let n = height.length;
  let maxL = [];
  maxL[0] = height[0];
  let maxR = [];
  maxR[n - 1] = height[n - 1];

  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(maxL[i - 1], height[i]);
    maxR[n - 1 - i] = Math.max(height[n - 1 - i], maxR[n - i]);
  }

  let ans = 0;

  for (let i = 0; i < n; i++) {
    ans += Math.max(Math.min(maxL[i], maxR[i]) - height[i], 0);
  }

  return ans;
}

console.log(trap(height));
