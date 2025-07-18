let flowerbed = [1, 0, 0, 0, 1];
let n = 2;

function flowers(flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
      if (count >= n) return true;
    }
  }

  return count >= n;
}

console.log(flowers(flowerbed, n));
