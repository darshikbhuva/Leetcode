let n = 4;

function string() {
  if (n === 1) {
    return a;
  }
  let res = "";
  if (n % 2 === 0) {
    for (i = 1; i <= n - 1; i++) {
      res += "a";
    }
    res += "b";
  } else {
    for (i = 1; i <= n - 2; i++) {
      res += "a";
    }

    res += "b";
    res += "c";
  }

  return res;
}

console.log(string(n));
