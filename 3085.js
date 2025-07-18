function kSpecial(word, k) {
  let freqMap = new Map();

  for (let ch of word) {
    freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
  }

  let freqs = [...freqMap.values()];
  freqs.sort((a, b) => a - b);

  let minDeletions = Infinity;

  for (let i = 0; i < freqs.length; i++) {
    let target = freqs[i];
    let deletions = 0;

    for (let f of freqs) {
      if (f < target) {
        deletions += f;
      } else if (f > target + k) {
        deletions += f - (target + k);
      }
    }

    minDeletions = Math.min(minDeletions, deletions);
  }

  return minDeletions;
}

console.log(kSpecial("aabcaba", 0));
