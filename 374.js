function guessNumber(n) {
  let l = 1;
  let r = n;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    let guessNum = guess(mid);

    if (guessNum === 0) {
      return mid;
    } else if (guessNum < 0) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
}
