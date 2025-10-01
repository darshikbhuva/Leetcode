let n = 129;

function isFascinating(n) {
  let n1 = n * 2;
  let n2 = n * 3;

  let finalNum = String(n) + String(n1) + String(n2);
  let sum = 0;
  let set = new Set();

  for (let i = 0; i < finalNum.length; i++) {
    if (!set.has(+finalNum[i])) {
      set.add(+finalNum[i]);
      sum += +finalNum[i];
    } else {
      return false;
    }
  }

  return sum === 45 && set.size === 9;
}

var isFascinating = function (n) {
  let num = n.toString() + (2 * n).toString() + (3 * n).toString();
  let numSet = new Set(num);
  return num.length === 9 && numSet.size === 9 && !numSet.has("0");
};

console.log(isFascinating(n));
