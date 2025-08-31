let n = 3;
let m = 2;

function flowerGame(n, m) {
  let o1 = Math.floor((n + 1) / 2);
  let e1 = Math.floor(n / 2);
  let o2 = Math.floor((m + 1) / 2);
  let e2 = Math.floor(m / 2);

  return e1 * o2 + o1 * e2;
}

console.log(flowerGame(n, m));
