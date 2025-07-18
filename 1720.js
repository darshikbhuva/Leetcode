let encoded = [1, 2, 3];
let first = 1;

function arr(encoded, first) {
  let res = encoded;
  res.unshift(first);

  for (i = 1; i < res.length; i++) {
    res[i] = res[i] ^ res[i - 1];
  }

  return res;
}

console.log(arr(encoded, first));
