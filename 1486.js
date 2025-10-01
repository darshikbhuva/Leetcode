let n = 4;
let start = 3;

function xorOperation(n, start) {
  let arr = [];
  let xor = 0;

  for (let i = 0; i < n; i++) {
    arr[i] = start + 2 * i;
    xor ^= arr[i];
  }

  return xor;
}
console.log(xorOperation(n, start));
