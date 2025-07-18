let colors = [0, 1, 0, 0, 1, 0, 1];
let k = 6;

function alternativeColors(colors, k) {
  let n = colors.length;
  let res = 0;
  let start = 0;

  for (let end = 1; end < n + k - 1; end++) {
    if (colors[end % n] === colors[(end - 1) % n]) {
      start = end;
    }

    if (end - start + 1 === k) {
      res++;
      start++;
    }
  }

  return res;
}

console.log(alternativeColors(colors, k));
