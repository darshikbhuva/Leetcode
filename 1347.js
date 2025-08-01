let s = "leetcode";
let t = "practice";

function minSteps(s, t) {
  let count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
  }

  let steps = 0;
  for (let i = 0; i < 26; i++) {
    if (count[i] > 0) steps += count[i];
  }

  return steps;
}

console.log(minSteps(s, t));
