let k = 1;

function smallestRepunitDivByK(k) {
  let num = 0;

  for (let i = 1; i <= k; i++) {
    num = (num * 10 + 1) % k;

    if (num === 0) {
      return i;
    }
  }
  return -1;
}

console.log(smallestRepunitDivByK(k));
