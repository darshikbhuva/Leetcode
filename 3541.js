s = "aeiaeia";

function freq(s) {
  let c = new Map();
  let v = new Map();
  let maxC = 0;
  let maxV = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      v.set(s[i], (v.get(s[i]) || 0) + 1);
    } else {
      c.set(s[i], (c.get(s[i]) || 0) + 1);
    }
  }

  let vArr = Array.from(v.values());
  let cArr = Array.from(c.values());

  if (vArr.length === 0) {
    maxV = 0;
    maxC = Math.max(...cArr);
  } else if (cArr.length === 0) {
    maxC = 0;
    maxV = Math.max(...vArr);
  } else {
    maxV = Math.max(...vArr);
    maxC = Math.max(...cArr);
  }

  return maxC + maxV;
}

console.log(freq(s));
