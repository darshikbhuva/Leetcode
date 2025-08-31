let s = "IDID";

function diStringMatch(s) {
  let res = [];
  let last = s.length;
  let start = 0;

  for (let i = 0; i <= s.length; i++) {
    if (start != last) {
      if (s[i] === "I") {
        res.push(start);
        start++;
      } else {
        res.push(last);
        last--;
      }
    } else {
      res.push(start);
    }
  }

  return res;
}

console.log(diStringMatch(s));
