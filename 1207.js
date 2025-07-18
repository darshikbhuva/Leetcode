function uniqueOccurrences(arr) {
  const freqMap = new Map();

  for (const num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const frequencies = Array.from(freqMap.values());
  const uniqueFrequencies = new Set(frequencies);

  return frequencies.length === uniqueFrequencies.size;
}
