let s = "EEEEEELELLLE";

function minimumChairs(s) {
  let res = 0,
    max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "E") {
      res++;
    } else {
      max = Math.max(res, max);
      res--;
    }
  }
  max = Math.max(res, max);
  return max;
}

console.log(minimumChairs(s));
