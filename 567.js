let s1 = "ab";
let s2 = "eidbaooo";

function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);
  const aCharCode = "a".charCodeAt(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - aCharCode]++;
    s2Count[s2.charCodeAt(i) - aCharCode]++;
  }

  if (arraysEqual(s1Count, s2Count)) return true;

  for (let i = s1.length; i < s2.length; i++) {
    s2Count[s2.charCodeAt(i) - aCharCode]++;
    s2Count[s2.charCodeAt(i - s1.length) - aCharCode]--;

    if (arraysEqual(s1Count, s2Count)) return true;
  }

  return false;
}

function arraysEqual(arr1, arr2) {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.log(checkInclusion(s1, s2));
