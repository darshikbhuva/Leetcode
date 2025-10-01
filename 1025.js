let n = 3;

function divisorGame(n) {
  if (n === 1) {
    return false;
  }
  let x = 0;
  let count = 1;
  while (n > 0) {
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        x = i;
        count++;
        break;
      }
    }

    n = n - x;
  }
  return count % 2 === 0;
}

console.log(divisorGame(n));
