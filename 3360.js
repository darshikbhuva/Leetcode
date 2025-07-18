let n = 12;

function stoneRemovalGame(n) {
  let start = 10;
  let count = 0;
  if (n < 10) {
    return false;
  }

  while (start > 0) {
    if (n < start) {
      break;
    }
    count++;
    n = n - start;
    start--;
  }

  if (count % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(stoneRemovalGame(n));
