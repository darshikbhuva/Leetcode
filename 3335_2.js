function getTransformedLength(s, t) {
  const MOD = 1e9 + 7;

  let freq = new Array(26).fill(0);
  for (let ch of s) {
    freq[ch.charCodeAt(0) - 97]++;
  }

  for (let step = 0; step < t; step++) {
    let nextFreq = new Array(26).fill(0);
    for (let i = 0; i < 26; i++) {
      if (i === 25) {
        nextFreq[0] = (nextFreq[0] + freq[25]) % MOD;
        nextFreq[1] = (nextFreq[1] + freq[25]) % MOD;
      } else {
        nextFreq[i + 1] = (nextFreq[i + 1] + freq[i]) % MOD;
      }
    }
    freq = nextFreq;
  }

  return freq.reduce((sum, count) => (sum + count) % MOD, 0);
}

console.log(getTransformedLength("abz", 1));
