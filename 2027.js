let s = "XXOX";

function minimumMoves(s) {
  let count = 0;
  let i = 0;

  while (i < s.length) {
    if (s[i] === "X") {
      count++;
      i += 3;
    } else {
      i++;
    }
  }

  return count;
}

console.log(minimumMoves(s));
