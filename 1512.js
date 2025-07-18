let nums = [1, 2, 3, 1, 1, 3];

function goodPairs(nums) {
  let count = 0;
  let freqMap = {};

  for (let num of nums) {
    console.log(`Current num: ${num}`);
    console.log(`Current freqMap:`, freqMap);

    if (freqMap[num]) {
      console.log(
        `Found ${num} in freqMap. Current frequency: ${freqMap[num]}`
      );
      count += freqMap[num];
      freqMap[num]++;
      console.log(`Updated count: ${count}`);
      console.log(`Updated freqMap:`, freqMap);
    } else {
      console.log(`${num} not found in freqMap. Initializing frequency to 1.`);
      freqMap[num] = 1;
      console.log(`Updated freqMap:`, freqMap);
    }

    console.log("-----------------------------");
  }

  return count;
}

console.log(goodPairs(nums));
