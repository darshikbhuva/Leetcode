function kthDistinct(arr, k) {
  const freqMap = new Map();

  for (const str of arr) {
    freqMap.set(str, (freqMap.get(str) || 0) + 1);
  }

  let count = 0;
  for (const str of arr) {
    if (freqMap.get(str) === 1) {
      count++;
      if (count === k) return str;
    }
  }

  return "";
}
