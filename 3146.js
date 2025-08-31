(s = "abcde"), (t = "edbac");

function findPermutationDifference(s, t) {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        sum += Math.abs(i - j);
      }
    }
  }

  return sum;
}

console.log(findPermutationDifference(s, t));
