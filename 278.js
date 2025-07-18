function badVersion(n) {
  let l = 1;
  let r = n;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    let hasBad = isBadVersion(mid);

    if (hasBad) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return r;
}
