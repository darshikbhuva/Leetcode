function dominant(nums) {
  const freqMap = new Map();
  let n = nums.length;
  let maxCount = 0;
  let maxElement = null;

  for (const num of nums) {
    let count = (freqMap.get(num) || 0) + 1;
    freqMap.set(num, count);

    if (count > maxCount) {
      maxCount = count;
      maxElement = num;
    }
  }

  if (maxCount < Math.floor(n / 2)) {
    return -1;
  }

  let leftCount = 0;
  let leftFreq = new Map();
  let rightFreq = new Map(freqMap);
  let rightCount = maxCount;

  for (let index = 0; index < n - 1; index++) {
    let num = nums[index];
    leftCount++;
    leftFreq.set(num, (leftFreq.get(num) || 0) + 1);
    rightFreq.set(num, rightFreq.get(num) - 1);
    rightCount = rightFreq.get(maxElement);

    if (rightFreq.get(num) === 0) {
      rightFreq.delete(num);
    }

    if (
      leftFreq.get(maxElement) > Math.floor(leftCount / 2) &&
      rightCount > Math.floor((n - leftCount) / 2)
    ) {
      return index;
    }
  }

  return -1;
}

// Example Usage
let nums = [3, 3, 3, 3, 7, 2, 2];
console.log(dominant(nums));
