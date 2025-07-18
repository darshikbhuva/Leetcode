let s = "cb34";

function clearDigit(s) {
  let res = "";
  for (let c of s) {
    if (/[0-9]/.test(c)) {
      if (res.length > 0) {
        res = res.slice(0, -1);
      }
    } else {
      res += c;
    }
  }
  return res;
}

console.log(clearDigit(s));
