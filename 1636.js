let nums = [1, 1, 2, 2, 2, 3];

function frequencySort(nums) {
  let freqMap = new Map();
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  nums.sort((a, b) => {
    const freqA = freqMap.get(a);
    const freqB = freqMap.get(b);

    console.log(freqA, freqB);

    if (freqA !== freqB) {
      return freqA - freqB;
    }

    return b - a;
  });

  return nums;
}

console.log(frequencySort(nums));
