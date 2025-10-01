(g = [10, 9, 8, 7]), (s = [5, 6, 7, 8]);

function findContentChildren(s, g) {
  let count = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let j = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[j]) {
      count++;
      j++;
    }
  }

  return count;
}

console.log(findContentChildren(s, g));
