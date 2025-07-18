(jewels = "z"), (stones = "ZZ");

function count(jewels, stones) {
  let count = 0;

  for (i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }

  return count;
}

console.log(count(jewels, stones));
