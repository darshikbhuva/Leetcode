let s = "RLRRLLRLRL";

function balanceString(s) {
  let temp = 0;
  let count = 0;

  for (i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      temp++;
    } else {
      temp--;
    }

    if (temp === 0) {
      count++;
    }
  }

  return count;
}

console.log(balanceString(s));
