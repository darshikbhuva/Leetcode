let s = "aa";

function largeGroup(s) {
  const result = [];
  let start = 0;

  for (let i = 0; i <= s.length; i++) {
    if (i === s.length || s[i] !== s[start]) {
      const groupLength = i - start;
      if (groupLength >= 3) {
        result.push([start, i - 1]);
      }
      start = i;
    }
  }

  return result;
}

var largeGroupPositions = function (s) {
  let res = [];
  let set = new Set(s);

  if (set.size === 1 && s.length > 2) {
    res.push([0, s.length - 1]);
    return res;
  }

  let i = 0;
  let j = i + 1;

  while (j <= s.length) {
    if (j < s.length && s[i] === s[j]) {
      j++;
    } else {
      if (j - i >= 3) {
        res.push([i, j - 1]);
      }
      i = j;
      j = i + 1;
    }
  }

  return res;
};

console.log(largeGroup(s));
