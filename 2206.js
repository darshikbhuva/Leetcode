let nums = [1, 2, 3, 4];

function equalPair(nums) {
  let freqMap = {};

  for (let item of nums) {
    freqMap[item] = (freqMap[item] || 0) + 1;
  }

  for (let count of Object.values(freqMap)) {
    if (count % 2 !== 0) {
      return false;
    }
  }

  return true;
}

console.log(equalPair(nums));
