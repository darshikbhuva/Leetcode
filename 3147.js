let energy = [5, 2, -10, -5, 1];
let k = 3;

function maximumEnergy(energy, k) {
  let n = energy.length - 1;
  let result = -Infinity;
  let dp = Array.from(energy.length).fill(0);

  for (let i = n; i >= 0; i--) {
    dp[i] = i + k <= n ? dp[i + k] + energy[i] : energy[i];
    result = Math.max(result, dp[i]);
  }

  return result;
}

console.log(maximumEnergy(energy, k));
