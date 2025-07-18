let s = "hello";

function score(s) {
  count = 0;

  for (i = 0; i < s.length - 1; i++) {
    count += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return count;
}

console.log(score(s));
