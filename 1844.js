let s = "a1c1e1";

function replace(s) {
  let res = "";
  for (i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      res += s[i];
    } else {
      let ch = Number(s.charCodeAt(i - 1)) + Number(s[i]);

      res += String.fromCharCode(ch);
    }
  }

  return res;
}

console.log(replace(s));
