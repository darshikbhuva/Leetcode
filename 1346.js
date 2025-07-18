function check(arr) {
  let map = new Map();
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], true);
    if (arr[i] === 0) zeroCount++;
  }

  if (zeroCount > 1) return true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0 && map.has(2 * arr[i])) {
      return true;
    }
  }

  return false;
}

var checkIfExist = function (arr) {
  const hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    const currValue = arr[i];

    if (hashTable[currValue] !== undefined) {
      return true;
    }
    hashTable[currValue / 2] = currValue;
    hashTable[currValue * 2] = currValue;
  }

  return false;
};
