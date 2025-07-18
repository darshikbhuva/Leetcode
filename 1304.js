let n = 4;

function array(n) {
  let res = [];

  let start = Math.floor(n / 2);

  for (i = -start; i <= start; i++) {
    if (i === 0 && n % 2 === 0) {
      continue;
    } else {
      res.push(i);
    }
  }

  return res;
}

console.log(array(n));
