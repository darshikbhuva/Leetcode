const s = "café";
const t = "éfac";

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
}

console.log(isAnagram(s, t));

// O(n*log(n))
